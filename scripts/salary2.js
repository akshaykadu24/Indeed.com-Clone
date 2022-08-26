
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {footbar} from "../components/footbar.js"
document.getElementById("Footbar").innerHTML=footbar();

let salary = JSON.parse(sessionStorage.getItem("salary"));
let avrg = document.getElementById("avrg");
avrg.innerText=((salary.Yearsalary)/12).toFixed(2);
let position = document.getElementById("Position");
position.innerText=salary.Title;

