window.addEventListener("load",()=>{
    company();
})
let company=()=>{
    let compdata=JSON.parse(localStorage.getItem("comp"));
    console.log(compdata);

    let abt=document.getElementById("about");
    let background=document.getElementById("background");
    let back=document.createElement("img");
    back.src=compdata.backgroundImg;
    let info=document.createElement("h4");
    info.innerText=compdata.aboutComapany;
    abt.append(info);
    background.append(back);

    
    let companyhead=document.getElementById("companyhead");
    let endpt=document.getElementById("endpt");
    let i=document.createElement("img");
    i.src=compdata.logoImg;
    let tit=document.createElement("h3");
    tit.innerText=compdata.company;
    let titn=document.createElement("h3");
    titn.innerText=`> ${compdata.company}`;
    let x = Math.floor((Math.random() * 1000));
    let rev=document.createElement("h5");
    rev.innerText=`${compdata.rating}⭐ ${x}Reviews`;
    let diva=document.createElement("div");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let follow=document.createElement("button");
    follow.innerText="Follow";
    let wri=document.createElement("button");
    wri.innerText="Write a review";
    let divb=document.createElement("div");
    div1.append(i);
    div2.append(tit,rev);
    diva.append(div1,div2);
    divb.append(follow,wri);
    companyhead.append(diva,divb);
    endpt.append(titn);



    let alldata=JSON.parse(localStorage.getItem("data"));
    console.log(alldata);
    let sujjest=document.getElementById("sujjest");
    let divy=document.createElement("div");
    let divw=document.createElement("div");

    let count=0;
        alldata.forEach((el) => {
            count++;
            if(el.company !== compdata.company&&count<=5){
        let ind=document.createElement("h3");
        ind.src=el.industry;
        let i=document.createElement("img");
        i.src=el.logoImg;
        let tit=document.createElement("h3");
        tit.innerText=el.company;
        let x = Math.floor((Math.random() * 1000));
        let rev=document.createElement("h5");
        rev.innerText=`${el.rating}⭐ ${x} Reviews`;
        let vc=document.createElement("button");
        vc.innerText="View Company";
        vc.onclick=()=>{
            view(el);
        }
        vc.setAttribute("class","vcom");

        let div1=document.createElement("div");
        div1.setAttribute("class","company1");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        div1.append(ind,i,tit,rev)
        div2.append(vc);
        div3.append(div1,div2)
        sujjest.append(div3);
        let jobs=document.getElementById("jobs");
            let job=document.createElement("h3");
            job.innerText=el.Title;
            let type=document.createElement("h5");
            type.innerText=el.JobType;
            let ct=document.createElement("h6");
            ct.innerText=el.city;
            let vj=document.createElement("button");
            vj.innerText="View Job";
            let div4=document.createElement("div");
            let div5=document.createElement("div");
            let div6=document.createElement("div");
            div4.append(type,job,ct);
            div5.append(vj);
            div6.append(div4,div5);
            jobs.append(div6);
            
        }
    if(count<=6){
        let salaries=document.getElementById("salaries");
     let job=document.createElement("h3");
     job.innerText=el.Title;
    let salrm=document.createElement("h5");
    salrm.innerText= "Per Months";
    let salry=document.createElement("h5");
    salry.innerText= "Per Year";
    let salrny=document.createElement("h3");
    salrny.innerText=`₹ ${el.Yearsalary}`
    let salrnm=document.createElement("h3");
    salrnm.innerText=`₹ ${el.monthlysalary}`
    let divx=document.createElement("div");
    let divn=document.createElement("div");
    let divz=document.createElement("div");
   
    if(count%2!==0){
        divn.append(salrny,salry)
    divx.append(job,divn);
    }else{
        divn.append(salrnm,salrm)
        divz.append(job,divn);
    }
    divy.append(divx);
    divw.append(divz);

    
    }

    })
    
    salaries.append(divy,divw);

    
}
let  view=(data)=>{
localStorage.setItem("comp",JSON.stringify(data));
let compdata=JSON.parse(localStorage.getItem("comp"))||[];
console.log(compdata);
window.location.href="/companydetails.html";
}