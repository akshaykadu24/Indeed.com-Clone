import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}
let url = "https://pacific-refuge-88537.herokuapp.com/api/signup";
     let signinid=JSON.parse(localStorage.getItem('signinid'));
    
     window.onload=()=>{
      getdata();
     }

  let getdata = async () => {
    let res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/signup/${signinid}`);
    res = await res.json();
    
  
    append(res);
    
  };
let passchange=false;
let append =(data)=>{
  
   document.getElementById('jobtype').innerText=data.Athorised;
   document.getElementById('mail').innerText=data.email;
   
   document.getElementById('phone').innerText=data.mobile||"none";
   document.getElementById('infodata').innerText=data.email;
   if(passchange==false){
    document.getElementById('dotpassword').innerText="..........";
   }else{
    document.getElementById('dotpassword').innerText=data.password;
   }
   
}

    let acountType=document.getElementById('acounttype');
    acountType.onclick=()=>{
      localStorage.setItem('return',JSON.stringify('return'));
      window.location.href="AcountType.html";
      
    }
    let email=document.getElementById('email');
    email.onclick=async()=>{
        let datamail=window.prompt('enter new email');
       let flag=false;
        res = await fetch(url);
        res=await res.json();
        res.forEach(el => {
          if(el.email==datamail){
            flag=true;
          }
        });
        if(flag===true){
          alert('Given email is alredy used');
        }else{
          updatedata(datamail,1);
        }
    }
  

    let pass=document.getElementById('changepass');
    pass.onclick=async()=>{
      let password=window.prompt('enter privious password');
      let newpassword;
      res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/signup/${signinid}`);
        res=await res.json();
        if(res.password==password){
          newpassword=window.prompt("enter new password");
          passchange=true;
          if(newpassword.length<=4){
          alert('password is not strong')
          }else{
            let classpass=document.getElementById('dotpassword');
            classpass.setAttribute('class','classpass')
            updatedata(newpassword,2);
          }
        }else{
          alert('your password does not mached');
        }

        
      
    }


    let phone=document.getElementById('changephone');
    phone.onclick=()=>{
      let number=window.prompt('enter mobile');
     
      if(number.length==10){
        updatedata(number,3);
      }else{
        alert('invalid mobile');
      }
    }

    let signout=document.getElementById('signout');
    signout.onclick=()=>{
      localStorage.setItem('signinsatus',JSON.stringify(false));
      window.location.href="index.html";
    }

  let updatedata = async (name,num) => {
    if(num==1){
      data = { email: name };
    }else if(num==2){
      data = { password: name };
    }else if(num==3){
      data = { mobile: name };
    }
    let res = await fetch(
      `https://pacific-refuge-88537.herokuapp.com/api/signup/${signinid}`,
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