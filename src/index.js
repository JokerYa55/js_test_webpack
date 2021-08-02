import './styles.css';
import './styles.scss';
import { Form1 } from './form/form1.js'

//const Handlebars = require("handlebars");
//const template = Handlebars.compile("Name: {{name}}");
//console.log(template({ name: "Nils" }));

var appDiv = document.getElementById('app');
console.log(appDiv);
var form1 = new Form1(appDiv);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    console.log('btn1');
    form1.show();
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    form1.clear();
    console.log('btn2');
})

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    console.log('btn3');
})