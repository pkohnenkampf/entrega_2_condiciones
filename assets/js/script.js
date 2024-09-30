//Primer item del proyecto

const elemento = document.getElementById('contenedor');

function activarClase() {
    const contieneClase = elemento.classList.contains('borde1'); // retorna true o false

    if (contieneClase === false ) {
        elemento.classList.add('borde1');
    } else {
        elemento.classList.remove('borde1');
    }
}

elemento.addEventListener("click", activarClase);

//segundo item del proyecto

const btn1 = document.getElementById('btnVerificar');

const mensaje1=document.getElementById("mensaje1")

const cantMax=10;

function verificacionCantidad(){
    const input1 = parseInt(document.getElementById("ingresoSticker1").value);
    const input2 = parseInt(document.getElementById("ingresoSticker2").value);
    const input3 = parseInt(document.getElementById("ingresoSticker3").value);
    const sumaSticker = (input1 + input2 + input3);

    if(sumaSticker > cantMax) {
        mensaje1.innerHTML='Llevas demasiados stickers' 
    } else {
        mensaje1.innerHTML='Llevas '+sumaSticker+' Sticker'
    }
};
btn1.addEventListener("click",verificacionCantidad);

//tercer item del proyecto

const btnClave = document.getElementById('btnClave');
const mensaje2 = document.getElementById("mensaje2");


function verificarClave() {
    const digito1 = document.getElementById("digito1").value;
    const digito2 = document.getElementById("digito2").value;
    const digito3 = document.getElementById("digito3").value;
    const unionClave = digito1 + digito2 + digito3;

    if(unionClave=='911') {
        mensaje2.innerHTML="Password 1 correcta"
    } else if(unionClave=='724') {
        mensaje2.innerHTML="Password 2 correcta"
    } else {
        mensaje2.innerHTML="Clave incorrecta"
    }
}

//btnClave.addEventListener("click", verificarClave);
   