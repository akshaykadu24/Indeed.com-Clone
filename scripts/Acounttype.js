import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}
let but1 = document.getElementById("job_seeker");
  but1.onclick = () => {
    getdata("job_seeker");
  };

  let but2 = document.getElementById("Employed");
  but2.onclick = () => {
    localStorage.setItem("Athorised", JSON.stringify("Employed"));

    getdata("Employed");
  };

  let signinId = JSON.parse(localStorage.getItem("signinid"));
  let url = "https://indeed-data.vercel.app/signup";
  let getdata = async (name) => {
    let res =  await fetch(url);
    res =  await res.json();

    updatedata(signinId, name);
  };
  let returnornot = JSON.parse(localStorage.getItem("return"));
  let updatedata = async (id, name) => {
    data = { Athorised: name };

    let res =  await fetch(
      `https://indeed-data.vercel.app/signup/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (returnornot == "return") {
      window.location.href = "setting.html";
    } else {
      window.location.href = "index.html";
    }
  };