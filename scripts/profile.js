import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}
let url = "https://indeed-data.vercel.app/signup";
let signinid = JSON.parse(localStorage.getItem("signinid"));

window.onload = () => {
  getdata();
};

let getdata = async () => {
  let res =  await fetch(
    `https://indeed-data.vercel.app/signup/${signinid}`
  );
  res =  await res.json();
  if(res.jobinterest !==undefined){
      let div=document.getElementById('lastprofilediv');
      let div2=document.getElementById('buildprofile');
      div.style.display='none';
      div2.innerHTML=null;
  }
  
  append(res);
};
let passchange = false;
let append = (data) => {
  let div=document.getElementById('innerprofile');
  div.innerHTML=null;
   for(let key in data){
    if(key=='id'){

    }else{
      let div0=document.createElement('div');
      let h2=document.createElement('h2');
      let but=document.createElement('h3');
      h2.innerText=key;
      but.innerText=data[key];
      h2.setAttribute('class',"info");
      but.setAttribute('class','changebutton')
      div0.setAttribute('class','innerdiv');
      div0.append(h2,but);
      div.append(div0);
    }
    

   }
};



let savebutton=document.getElementById('savebutton');
savebutton.onclick=()=>{
  let data={
      Education:document.getElementById('edu').value,
      IT_Skills:document.getElementById('it').value,
      Languages:document.getElementById('lang').value,
      Experience:document.getElementById('exp').value,
      worked_companies:document.getElementById('comp').value,
      location:document.getElementById('loc').value,
      prefred_location:document.getElementById('pref').value,
      jobinterest:document.getElementById('int').value,
  }
  if(data.Education=="" || data.Experience=="" ||data.IT_Skills==""|| data.Languages==""||data.jobinterest==""||data.location==""||data.prefred_location==""||data.worked_companies==""){
      alert('fill all the data')
  }else{
     
      
      updatedata(data)

  }
}

let updatedata = async (data) => {
 
  let res =  await fetch(
    `https://indeed-data.vercel.app/signup/${signinid}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  getdata();
};
