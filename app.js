let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSoteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número con ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto en menor');
        } else{
            asignarTextoElemento ('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if(listaNumerosSoteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {
    //si el numero generado esta incluido en la lista
    if(listaNumerosSoteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSoteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar nunmero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIniciales();