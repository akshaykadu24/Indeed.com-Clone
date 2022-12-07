import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}
window.onload = () => {
    getdata();
  };

  let getdata = async () => {
    let res = await fetch(
      `https://indeed-data.vercel.app/Indded`
    );
    res = await res.json();
   
    
    
  };
 



 let savebutton=document.getElementById('savebutton');
  savebutton.onclick=()=>{
    let data={
      company:document.getElementById('name').value,
      Title:document.getElementById('edu').value,
      preferd_skills:document.getElementById('it').value,
      Description:document.getElementById('lang').value,
      JobType:document.getElementById('exp').value,
      StaffSize:document.getElementById('comp').value,
      city:document.getElementById('loc').value,
      Yearsalary:document.getElementById('pref').value,
      logoImg:document.getElementById('int').value,
    }
    if(data.company=="" || data.Title=="" ||data.preferd_skills==""|| data.Description==""||data.JobType==""||data.StaffSize==""||data.city==""||data.Yearsalary==""){
        alert('fill all the required data')
    }else{
       
        
        updatedata(data)
        alert('Data added succesfully')
        window.location.href='index.html';
    }
  }
  
  let updatedata = async (data) => {
   
    let res = await fetch(
      `https://indeed-data.vercel.app/Indded`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    res = await res.json();
   
    
   console.log(res)
    alert('Data added succesfully')
    window.location.href='index.html';
  };
