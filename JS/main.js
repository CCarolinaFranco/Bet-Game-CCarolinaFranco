"use strict";


const selectNum = document.querySelector('.js_select_num');
const inputApuestas = document.querySelector('.js_inp_apuestas');
const btnJugar = document.querySelector('.js_btn-jugar');
const ganadoP = document.querySelector('.js_Pganado')


const selectNumValue = selectNum.value;
const inputApuestasValue = inputApuestas.value;
const numSelecV =  parseInt(selectNum.value);
console.log(numSelecV)



function clickBtnJugar(){
    
    getRandomNumber()
    
}

btnJugar.addEventListener("click",clickBtnJugar);

const numRand = Math.ceil(Math.random() *6);
//console.log(numRand);

function getRandomNumber(max){ 
    //event.preventDefault();
    return Math.ceil(Math.random() * max);
    
   
   
   
     
   ganadoP.innerHTML = `<p>Has ganado el doble de lo apostado</p> `


   }




  

