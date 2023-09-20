"use strict";


const selectNum = document.querySelector('.js_select_num');
const inputApuestas = document.querySelector('.js_inp_apuestas');
const btnJugar = document.querySelector('.js_btn-jugar');
const ganadoP = document.querySelector('.js_Pganado');
const balanceSpan = document.querySelector('.j_balance');


const inputApuestasValue = inputApuestas.value;
let balance = 50;



//Funcion manejadora de evento
const clickBtnJugar = (event) => {
  event.preventDefault();
  const selectNumValue = parseInt(selectNum.value);
  const computerNumber = getRandomNumber(6);
  
  if (selectNumValue === computerNumber) {
    writeMessage("Has ganado el doble de los apostado!");
    addUserBet();
  }
  else {
    writeMessage ("Has perdido lo apostado!");
    decreaseUserBet();
};
};

//Funciones de operacion para la apueta y balance
const addUserBet = () => {
  const bet = parseFloat(inputApuestas.value);
  balance = balance + (bet*2);
  balanceSpan.innerHTML = balance
}
const decreaseUserBet = () => {
  const bet = parseFloat(inputApuestas.value);
  balance = balance - (bet);
  balanceSpan.innerHTML = balance
}

//funion para escribir los mensajes
const writeMessage = (betMessage) => {
  ganadoP.innerHTML = betMessage;
}

//funcion de numero random from the librery
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
};

//Evento
btnJugar.addEventListener("click", clickBtnJugar);









