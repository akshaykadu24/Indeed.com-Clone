window.onload = () => {
    getdata();
  };

  let getdata = async () => {
    let res = await fetch(
      `https://pacific-refuge-88537.herokuapp.com/api/Indded`
    );
    res = await res.json();
   
    
    
  };
 



  savebutton=document.getElementById('savebutton');
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

    }
  }
  
  let updatedata = async (data) => {
   
    let res = await fetch(
      `https://pacific-refuge-88537.herokuapp.com/api/Indded`,
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
