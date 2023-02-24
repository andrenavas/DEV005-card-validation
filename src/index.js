import validator from './validator.js';
//Definiendo las variables
const btnValidar = document.getElementById('btn');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');
const ocultaNum = document.getElementById('ocultaNum');
const numTarjeta = document.getElementById('credit-card-number');
const nombTarjeta = document.getElementById('credit-card-name');
const mesTarjeta = document.getElementById('select-month');
const yearTarjeta = document.getElementById('select-year');
const dataTarjeta = document.querySelector('#card .card-number-data');
const dataNombre = document.querySelector('#card .card-name-data');
const dataMes = document.querySelector('#month');
const dataYear = document.querySelector('#year');
const logoMarca = document.querySelector('#logo-marca');
const pantallaInicial = document.getElementById('pantallaInicial');
const pantallaConfirm = document.getElementById('pantallaConfirm');

//Llenado de la tarjeta de foma dinámica
//Para el número de tarjeta y agregando logo de la marca
numTarjeta.addEventListener('keyup', (event) =>{
  const valorInput = event.target.value;
  numTarjeta.value = valorInput.replace(/\s/g,'');
  dataTarjeta.textContent = valorInput;

  if(valorInput[0] === '4') {
    logoMarca.innerHTML ="";
    const logoCard = document.createElement('img');
    logoCard.src = 'imagenes/visa.png';
    logoMarca.appendChild(logoCard);
  } else if (valorInput[0] === '5') {
    logoMarca.innerHTML ="";
    const logoCard = document.createElement('img');
    logoCard.src = 'imagenes/mastercard.png';
    logoMarca.appendChild(logoCard);
  }
});
//Para el nombre de la tarjeta
nombTarjeta.addEventListener('keyup', (event) =>{
  const valorInput = event.target.value;
  dataNombre.textContent = valorInput;
});
//Para el mes
mesTarjeta.addEventListener('change', (event) =>{
  const valorInput = event.target.value;
  dataMes.textContent = valorInput;
});
//Para el año
yearTarjeta.addEventListener('change', (event) =>{
  const valorInput = event.target.value;
  dataYear.textContent = valorInput;
});
//Definiendo las funciones
function validar() {
  const num = numTarjeta.value;
  const isValid = validator.isValid(num);
  const maskify = validator.maskify (num);
  if (num === '') {
    return error.innerHTML = 'El campo no puede estar vacío, ingresa el número de tu tarjeta.';
  }
  pantallaInicial.style.display = 'none';
  pantallaConfirm.style.display = 'block';

  if (isValid){ 
    resultado.innerHTML = 'Tu tarjeta es válida. ¡Gracias por tu compra!.';
  } 
  else {
    resultado.innerHTML = 'Tu tarjeta es inválida. Intenta con otra tarjeta.';
  }
  if (maskify) {
    ocultaNum.innerHTML = maskify;
  } 
}
//Llamando al algoritmo al dar al botón y evitando con preventDefault que recargue la página
btnValidar.addEventListener('click', function(event) {
  event.preventDefault(); validar()
})