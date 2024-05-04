let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario))
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto))
    //console.log(numeroDeUsuario === numeroSecreto); //===verifica que el valor se igual tanto si es int o string
    if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      //El usuario no acertó
      if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p','El numero es menor');
    } else {
      asignarTextoElemento('p','El numero es mayor');
    }
    intentos++;
    limpiarCaja();
    }
  return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sortemos todos lso numeros empezar de nuevo
  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sorteron todos los números posibles');
  }
  //Si el numero esta incluido en la lista.
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

function condicionesIniciales(){
  asignarTextoElemento('h1','JUEGO DEL NUMERO SECRETO');
  asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJurgo(){
  //limpiar caja
  limpiarCaja();
  //Indicar el intervalo de numeros
  condicionesIniciales();
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  //Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*--------------------------------------------------------------------------------------------------------------------------


*/