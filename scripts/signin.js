import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')


  nav.innerHTML = navbar();

let sub = document.getElementById("submit");
sub.onclick = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  
  if (email == "") {
    alert("enter email!");
  } else if (pass == "") {
    alert("enter password!");
  } else {
    let data = {
      email: email,
      password: pass,
    };

    checkData(data);
  }
};

let url = "https://pacific-refuge-88537.herokuapp.com/api/signup";

let checkData = async (data) => {
  let res = await fetch(url);
  res = await res.json();
  let count = 0;
  res.forEach((el) => {
    if (el.email == data.email && el.password == data.password) {
      alert("you are logged in");
      count++;
      localStorage.setItem("signinid", JSON.stringify(el.id));
      localStorage.setItem("signinsatus", JSON.stringify(true));
      if (el.Athorised === undefined) {
        window.location.href = "AcountType.html";
      } else {
        window.location.href = "index.html";
      }
    }
  });

  if (count === 0) {
    alert("wrong credential");
  }
};