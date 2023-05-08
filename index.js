//const radius = document.getElementsByClassName('radius')

const radius=document.querySelector('.radius');
const button=document.querySelector('button');
const result=document.querySelector('.result');
const perimeter=document.querySelector('.perimeter');

const pi=22/7;

button.addEventListener('click',calculate=()=>{
  radi=radius.value;
  
  aras=pi*radi*radi;
  perimeters=0.5*pi*(radi*2);
  perimeter.innerHTML="the perimeter is "+ perimeters;
  result.innerHTML="the area is "+ aras;
})






