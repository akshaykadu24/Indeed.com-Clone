import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
nav.innerHTML = signin_navbar()

window.addEventListener('load',()=>{
    getdata()
})

let getdata = async()=>{
    let res = await fetch('https://pacific-refuge-88537.herokuapp.com/api/Indded')
    let data = await res.json()
    append(data)
    console.log(data)
    renderDom(data[0])
}

let append = (data)=>{
    let jobs_container = document.getElementById('jobs_container')
    data.forEach((elem)=>{
        let atitle = document.createElement('h1')
        atitle.innerText = elem.Title
        let acompany = document.createElement('p')
        acompany.innerText = elem.compoany
        // let alocation = document.createElement('p')
        // alocation.innerText = elem.location
        let amonthlysalary  = document.createElement('p')
        amonthlysalary .innerText =  `${elem.monthlysalary}a month `
        let ajobtype = document.createElement('p')
        ajobtype.innerText = elem.JobType
        let aAboutRole  = document.createElement('p')
        aAboutRole .innerText =  elem.AboutRole
       
        let div = document.createElement('div')
        div.append(atitle,acompany,amonthlysalary,ajobtype,aAboutRole)
        jobs_container.append(div)
    })

}


let renderDom = ({Title,compoany,JobType, AboutRole,monthlysalary})=>{
    let container = document.getElementById('container')
    container.innerHTML = null
        let atitle = document.createElement('h1')
        atitle.innerText = Title
        let acompany = document.createElement('a')
        acompany.href = 'compoany.html'
        acompany.innerText = compoany
        
        // let alocation = document.createElement('p')
        // alocation.innerText = location
        let amonthlysalary  = document.createElement('p')
        amonthlysalary .innerText =  `${monthlysalary} a month `
        let ajobtype = document.createElement('p')
        ajobtype.innerText = JobType
        let aAboutRole  = document.createElement('p')
        aAboutRole .innerText =  AboutRole
        let button = document.createElement('button')
        button.innerText = 'Apply now'
        button.addEventListener('click',()=>{
            buttonchange(button)
        })


        let div = document.createElement('div')
        div.append(atitle,acompany,amonthlysalary,ajobtype,aAboutRole,button)
        container.append(div)
    

}

let buttonchange = (button)=>{
    if(button.innerText == 'Apply now'){
        button.innerText = 'Applied';
        button.setAttribute('Style','bg:green');
    }else{
        button.innerText = 'Apply now'
        button.setAttribute('Style','Color:blue');

    }
}