function mostrarAlerta() {
    var elemento = document.getElementById("texto");
    alert('Texto: ' + elemento.value);
}

var relogioElement;

//window.addEventListener('load', loadElements);

document.addEventListener('DOMContentLoaded', loadElements);

function loadElements() {
    relogioElement = document.getElementById("relogio");
}

function relogio() {

    var data = new Date();

    var dia = data.getDay().toString().padStart(2, '0');
    var mes = data.getMonth().toString().padStart(2, '0');
    var ano = data.getFullYear().toString();

    var hora = data.getHours().toString().padStart(2, '0');
    var minuto = data.getMinutes().toString().padStart(2, '0');
    var segundo = data.getSeconds().toString().padStart(2, '0');

    var time =  `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

    relogioElement.textContent = time;
    
}

setInterval(relogio, 1000);
