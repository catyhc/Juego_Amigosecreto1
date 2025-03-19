// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

    function agregarAmigo(){
        const inputAmigo = document.getElementById("amigo");
        const nombreAmigo = inputAmigo.value.trim();
        
//para validar nombre
        if (nombreAmigo === "") {
            alert("Ingrese nombre");
            return;
        }

//para agregar el nombre a la array
        amigos.push(nombreAmigo);

        actualizarLista();

//para limpiar los campos de entrada
        inputAmigo.value = "";
        inputAmigo.focus();


    }

//para actualizar la lista de entrada (toda la funcion)
    function actualizarLista() {
        const listaAmigoUl = document.getElementById("listaAmigos");
        listaAmigoUl.innerHTML = "";

        amigos.forEach(amigos => {
            const li = document.createElement("li");
            li.textContent = amigos;
            listaAmigoUl.appendChild(li);

        });
    }

function sortearAmigos() {
    if (amigos.length === 0){
        alert("Favor ingresa algún nombre para poder sortear.");
        return
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl =document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigos);

});
