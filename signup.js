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

let url = "https://pacific-refuge-88537.herokuapp.com/api/signup";

let adddata = async (data) => {
  res = await fetch(url);
  res = await res.json();
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