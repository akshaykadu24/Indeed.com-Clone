import {navbar,signin_navbar} from "../components/navbar.js"
let nav = document.getElementById('navbar')
let data=JSON.parse(localStorage.getItem('signinsatus'))
if(data ===true){
  nav.innerHTML = signin_navbar()
}else{
  nav.innerHTML = navbar();
}

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
let el;
let append = (data)=>{
    let jobs_container = document.getElementById('jobs_container')
    jobs_container.innerHTML = null
    data.forEach((elem)=>{
        el=elem
        let atitle = document.createElement('h2')
        atitle.innerText = elem.Title
        let acompany = document.createElement('p')
        acompany.innerText = elem.company
        let arating = document.createElement('h4')
        arating.innerText = elem.rating
        let div2 = document.createElement('div')
        div2.append(acompany,arating)
        div2.setAttribute('id','comp_rating')

        let alocation = document.createElement('p')
        alocation.innerText = elem.city
        let amonthlysalary  = document.createElement('p')
        amonthlysalary .innerText =  `${elem.monthlysalary} per month `
        let ajobtype = document.createElement('p')
        ajobtype.innerText = elem.JobType
        let div1 = document.createElement('div')
        div1.append(amonthlysalary,ajobtype)
        div1.setAttribute('id','sal_type')
        
        let aAboutRole  = document.createElement('p')
        aAboutRole .innerText =  elem.AboutRole
       
        let div = document.createElement('div')
        div.append(atitle,div2,alocation,div1,aAboutRole)
        div.setAttribute('id','jobs')
        div.addEventListener('click',()=>{
            renderDom(elem)
        })

        jobs_container.append(div)
    })

}


let renderDom = ({Title,company,city,JobType,rating,Description,preferd_skills, AboutRole,monthlysalary})=>{
    let container = document.getElementById('container')
    container.innerHTML = null
        let atitle = document.createElement('h2')
        atitle.innerText = Title
        let acompany = document.createElement('a')
        acompany.style.color='blue'
        acompany.style.cursor="pointer";
        
        acompany.onclick=()=>{
            localStorage.setItem('scomp',JSON.stringify(el))
            window.location.href = 'companydetails.html'
        }
        acompany.innerText = company
        let arating = document.createElement('h4')
        arating.innerText = rating
        let div2 = document.createElement('div')
        div2.append(acompany,arating)
        div2.setAttribute('id','comp_rating')
        
        let alocation = document.createElement('p')
        alocation.innerText = city
        let amonthlysalary  = document.createElement('p')
        amonthlysalary .innerText =  `${monthlysalary} per month `
        let ajobtype = document.createElement('p')
        ajobtype.innerText = JobType
        let div1 = document.createElement('div')
        div1.append(amonthlysalary,ajobtype)
        div1.setAttribute('id','sal_types')
        
        let hr = document.createElement('hr')
        let role = document.createElement('h2')
        role.innerText = 'About Role'
        let aAboutRole  = document.createElement('p')
        aAboutRole .innerText =  AboutRole
        let button = document.createElement('button')
        button.innerText = 'Apply now'
        button.addEventListener('click',()=>{
            
            buttonchange(button)
        })
        let job_detail = document.createElement('h2')
        job_detail.innerText= 'Job detail'
        let sal = document.createElement('h4')
        sal.innerText= 'Salary'
        let salary  = document.createElement('p')
        salary .innerText =  `${monthlysalary} per month `
        let typ = document.createElement('h4')
        typ.innerText= 'Job Type'
        let type = document.createElement('p')
        type.innerText = JobType
        let div3 = document.createElement('div')
        div3.append(sal,salary,typ,type,hr)

        let skills = document.createElement('h2')
        skills.innerText = 'Skills'
        let askills = document.createElement('p')
        askills.innerText = preferd_skills
        let Desc = document.createElement('h2')
        Desc.innerText = 'Description'
        let aDescription = document.createElement('p')
        aDescription.innerText = Description

        let hr1 = document.createElement('hr')
        let hr2 = document.createElement('hr')
        let hr3 = document.createElement('hr')
        let div4 = document.createElement('div')
        div4.append(skills,askills,hr1,Desc,aDescription,hr2)

        

        let div = document.createElement('div')
        div.append(atitle,div2,div1,alocation,button,hr,job_detail,div3,hr3,div4,role,aAboutRole)
        container.append(div)
    

}

let buttonchange = (button)=>{
    

    if(data ===true && button.innerText == 'Apply now'){

        button.innerText = 'Applied';
        button.style.backgroundColor = 'green';
        
    }else{
        alert("You are not Logedin")
        button.innerText = 'Apply now'
        button.style.backgroundColor = 'rgb(37,87,167)';

    }
}

let submit = document.getElementById('submit')
submit.addEventListener('click',()=>{
    submitting()

    
})

let submitting = async()=>{
    let t_search = document.getElementById('title').value
    let c_search = document.getElementById('loca').value
    let res;
    if(t_search==""){
        res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/Indded?city=${c_search}`)
    }else if(c_search==""){
        res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/Indded?Title=${t_search}`)
    }else{
        res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/Indded?Title=${t_search}&city=${c_search}`)

    }
    console.log(t_search,c_search)
    let data = await res.json()
    append(data)
    console.log(data)
    renderDom(data[0])
}

let tat = document.getElementById('title')
let cat = document.getElementById('loca')
let debounce_append = (data)=>{
    let i = document.getElementById('i')
    i.innerHTML = null
    data.forEach(({Title})=>{
        let tit = document.createElement('p')
        tit.innerText = Title
        tit.addEventListener('click',()=>{
            tat.value = Title
            i.innerHTML = null
        })
        i.append(tit)
    })
    
}
let debounce_append2 = (data)=>{
    let c = document.getElementById('c')
    c.innerHTML = null
    data.forEach(({city})=>{
        let cit = document.createElement('p')
        cit.innerText = city
        cit.addEventListener('click',()=>{
            loca.value = city
            c.innerHTML = null
        })
        c.append(cit)
    })
    
}
let title = document.getElementById('title')
title.addEventListener('input',()=>{
    inp_title()
})
let inp_title = async()=>{
    let query = title.value
    console.log(query)
    let res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/Indded?q=${query}`)
    let data = await res.json()
    console.log(data)
    debounce_append(data)
}

let city = document.getElementById('loca')
city.addEventListener('input',()=>{
    inp_city()
})
let inp_city = async()=>{
    let query = city.value
    console.log(query)
    let res = await fetch(`https://pacific-refuge-88537.herokuapp.com/api/Indded?q=${query}`)
    let data = await res.json()
    console.log(data)
    debounce_append2(data)
}
