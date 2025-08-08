// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos
function agregarAmigo(){
    let ingreso = document.getElementById("amigo");

    let valor = ingreso.value;

// Validación: Si el campo está vacío, muestra una alerta y detiene la función
    if (valor === "") {
        alert("Ingresa un nombre valido");
        return;
    
    }

    // Agrega el nombre al arreglo de amigos
    amigos.push(valor);

    // Limpia el campo de texto
    ingreso.value = "";

    // Llama a la función para mostrar la lista actualizada
    mostrarAmigos();


}

// Función para mostrar la lista de amigos en la página
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");


// Limpia la lista en el HTML para evitar duplicados
    lista.innerHTML = "";

// Bucle para recorrer el arreglo de amigos
     for (let i = 0; i < amigos.length; i++) {
 // Agrega cada amigo como un elemento de lista (<li>) al HTML
        lista.innerHTML += "<li>" + amigos [i] + "</li>";
    }
    
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
// Validación: Si la lista está vacía, muestra una alerta y detiene la función
    if (amigos.length === 0) {
        alert("No hay opciones disponibles"); 
        return; 
    }
// Genera un índice aleatorio basado en la cantidad de amigos
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
// Usa el índice aleatorio para seleccionar un amigo del arreglo
let seleccionado = amigos[indiceAleatorio];
// Obtiene el elemento del HTML donde se mostrará el resultado
let resultado = document.getElementById("resultado");
// Muestra el nombre del amigo sorteado en la página
resultado.innerHTML = "<li>🎉 Amigo seleccionado: " + seleccionado + "</li>";
    
}