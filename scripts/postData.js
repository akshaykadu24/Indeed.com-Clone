let nav = document.getElementById("navbar");
  import { Post_navbar, Post_navbar2 } from "../components/component.js";
  let data = JSON.parse(localStorage.getItem("signinsatus"));

  import {footbar} from "../components/footbar.js"
document.getElementById("Footbar").innerHTML=footbar();

  if (data !== true) {
    nav.innerHTML = Post_navbar();
  } else {
    nav.innerHTML = Post_navbar2();
  }

  let button2 = document.getElementById("signinbutton");
  button2.onclick = () => {
    if (data == true) {
      localStorage.setItem("signinsatus", JSON.stringify(false));
      window.location.reload();
    } else {
      window.location.href = "signin.html";
    }
  };

  let logo=document.getElementById('logo');
  logo.onclick=()=>{
    window.location.href="index.html";
  }

  let button3 = document.getElementById("findjob");
  button3.onclick = () => {
    window.location.href = "index.html";
  };
  let button4 = document.getElementById("postjob");
  button4.onclick = () => {
    window.location.href = "postData.html";
  };

  let url = "https://indeed-data.vercel.app/signup";
  let signinid = JSON.parse(localStorage.getItem("signinid"));

  let button = document.getElementById("postbutton");
  button.onclick = async () => {
    console.log(data)
    if (data !== true) {
        alert("You are not sign In");
    }else{
       let res = await fetch(
            `https://indeed-data.vercel.app/signup/${signinid}`
          );
          res = await res.json();
          
        
         if (res.Athorised == "Employed") {
            window.location.href = "addJobData.html";
          } else {
            alert("Your are not Athorised");
            window.location.href = "index.html";
          }
    }
    
  };
  window.addEventListener("scroll", function () {
    let header = document.getElementById("navbar");

    setTimeout(() => {
      header.setAttribute("class", "stickyheader");
    }, 5000);
  });