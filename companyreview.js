window.addEventListener("load",()=>{
    companies();
})

let companies=async()=>{
let res=await fetch("https://pacific-refuge-88537.herokuapp.com/api/Indded");
let data= await res.json();
 console.log(data);
 localStorage.setItem("data",JSON.stringify(data));
 let alldata=JSON.parse(localStorage.getItem("data"))||[];
 renderdom(data);
}

let renderdom=(data)=>{
let container=document.getElementById("container");
let count=0;
data.forEach((el) => {
    count++;
    if(count<=6){
    let i=document.createElement("img");
    i.src=el.logoImg;
    let tit=document.createElement("h3");
    tit.innerText=el.company;
    tit.onclick=()=>{
        companydetail(el);
    }
    let x = Math.floor((Math.random() * 1000));
    let rev=document.createElement("h5");
    rev.innerText=`${el.rating}⭐ ${x}Reviews`;
    rev.setAttribute("id","revi");
    let sal=document.createElement("a");
    sal.href="https://in.indeed.com/cmp/American-Express/salaries";
    sal.innerText="Salaries";
    let que=document.createElement("a");
    que.href="https://in.indeed.com/cmp/American-Express/salaries";
    que.innerText="Questions";
    let oj=document.createElement("a");
    oj.href="https://in.indeed.com/cmp/American-Express/salaries";
    oj.innerText="Open Jobs";
    let diva=document.createElement("div");
    diva.setAttribute("class","single");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let divb=document.createElement("div");
    let div=document.createElement("div");
    div1.append(i);
    div2.append(tit,rev);
    diva.append(div1,div2);
    divb.append(sal,que,oj);
    div.append(diva,divb);
    container.append(div);
}
});

}

function companydetail(data){
localStorage.setItem("comp",JSON.stringify(data));
let compdata=JSON.parse(localStorage.getItem("comp"))||[];
console.log(compdata);
window.location.href="/companydetails.html";
}
