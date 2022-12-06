
import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')

  nav.innerHTML = navbar();


let sub = document.getElementById("submit");
sub.onclick = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (name == "") {
    alert("fill name first!");
  } else if (email == "") {
    alert("enter email!");
  } else if (pass == "") {
    alert("enter password!");
  } else {
    let data = {
      name: name,
      email: email,
      password: pass,
      id: Date.now(),
    };

    adddata(data);
  }
};

let url = "https://indeed-data.vercel.app/signup";

let adddata = async (data) => {
  
 let res = await fetch(url);
  res = await res.json();
  console.log(res)
  let flag = true;
  res.forEach((el) => {
    if (el.email == data.email) {
      flag = false;
    }
  });
  if (flag === true) {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    window.location.href = "signin.html";
  } else {
    alert("Email is alredy used");
  }
};