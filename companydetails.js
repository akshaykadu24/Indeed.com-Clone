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
    info.innerText=compdata.Description;
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
    rev.innerText=`${compdata.rating}Rating ${x}Reviews`;
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
        rev.innerText=`${el.rating}Rating ${x}Reviews`;
        let vc=document.createElement("button");
        vc.innerText="View Company";
        vc.onclick=()=>{
            view(el);
        }
        vc.setAttribute("class","vcom");

        let div1=document.createElement("div");
        div1.setAttribute("class","company1");
    
        div1.append(ind,i,tit,rev,vc)
        sujjest.append(div1);
            }
    })


}
let  view=(data)=>{
localStorage.setItem("comp",JSON.stringify(data));
let compdata=JSON.parse(localStorage.getItem("comp"))||[];
console.log(compdata);
window.location.href="/companydetails.html";
}

