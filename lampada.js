const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!estaQuebrada())
    lamp.src = './img/ligada.jpg';
}

function lampOff(){
    if(!estaQuebrada())
    lamp.src = './img/desligada.jpg';
}

function lampQuebrar(){
    lamp.src = './img/quebrada.jpg'
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebrar);
