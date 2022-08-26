

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
 rdom(data);
}
let compare=document.getElementById("compare");

let renderdom=(data)=>{
let container=document.getElementById("container")||[];
let search=document.getElementById("search");

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
    let divx=document.createElement("div");
    let divy=document.createElement("div");
    div1.append(i);
    div2.append(tit,rev);
    diva.append(div1,div2);
    divb.append(sal,que,oj);
    div.append(diva,divb);
    container.append(div);

    // if(count%2!==0){
    //     divx.append(div);
    // }else{
    //     divy.append(div);
    // }
    // compare.append(div);
    compare.append(divx,divy);
    search.addEventListener("click",()=>{
        let name=document.getElementById("name").value;
        if(el.company===name){
            searchcomp(el);
        }
        
    })
    
}
});

}
let divx=document.createElement("div");
    let divy=document.createElement("div");
let rdom=(data)=>{
    let count=0;
    data.forEach((el) => {
        count++;
        if(count<=4){
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


        let diva=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div=document.createElement("div");
        
        div1.append(i);
        div2.append(tit,rev);
        diva.append(div1,div2);
        div.append(diva);
        // container.append(div);
    
        if(count%2!==0){
            divx.append(div);
        }else{
            divy.append(div);
        }
        // compare.append(div);
        
    }
    });
    
}
compare.append(divx,divy);

function searchcomp(data){
    localStorage.setItem("scomp",JSON.stringify(data));
    let scompdata=JSON.parse(localStorage.getItem("scomp"))||[];
    console.log(scompdata);
    window.location.href="/companydetails.html";
}

function companydetail(data){
localStorage.setItem("comp",JSON.stringify(data));
let compdata=JSON.parse(localStorage.getItem("comp"))||[];
console.log(compdata);
window.location.href="/companydetails.html";
}


