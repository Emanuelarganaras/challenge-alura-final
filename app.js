// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let ingreso = document.getElementById("amigo");

    let valor = ingreso.value;

    if (valor === "") {
        alert("Ingresa un nombre valido");
        return;
    
    }
    
    amigos.push(valor);

    ingreso.value = "";

    mostrarAmigos();


}


function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

     for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos [i] + "</li>";
    }
    
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay opciones disponibles"); 
        return; 
    }
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let seleccionado = amigos[indiceAleatorio];
let resultado = document.getElementById("resultado");
resultado.innerHTML = "<li>🎉 Amigo seleccionado: " + seleccionado + "</li>";

    
}