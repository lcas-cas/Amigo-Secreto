// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo() {
    let campoNombre = document.getElementById("amigo"); //Referencia al input html
    let nombre = campoNombre.value; //Obtiene el valor del input
    //console.log(nombre);

    if (verificarEntradaDeNombre(nombre)) {
        nombreAmigos.push(nombre);//Añade nombre al array
        actualizarListaAmigos(); // Actualiza la lista con los nombres
    }

    //console.log(nombreAmigos);
    document.getElementById("amigo").value = "";  // limpia el input
    campoNombre.focus(); //Devuelve el foco
}

function verificarEntradaDeNombre(nombre) {
    nombre = nombre.trim(); //Quita espacios antes y despues
    let nombreRegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; //Criterio de expresión regular

    //Verifica que haya solo letras y caracteres especiales
    if (nombreRegExp.test(nombre)) {
        return true;
    } else {
        alert(`Por favor, inserte un nombre válido (solo letras y espacios).`);
        return false;
    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //borra contenido de la lista ul

    //Recorre lista nombreAmigos y crea un elemento li para cada nombre
    for (let i = 0; i < nombreAmigos.length; i++) {
        let elementoLista = document.createElement("li"); //crear elemento li
        elementoLista.textContent = nombreAmigos[i]; //Agrega nombre dentro de li
        listaAmigos.appendChild(elementoLista); // Agregar el <li> a <ul>
    }
}

function validarListaAmigos() {
    if (nombreAmigos.length === 0) {
        alert(`La lista está vacía`); //Notifica al usuario
        return false; //Si esta vacia la lista, regresa false
    }
    return true; //Si No esta vacia, regresa true
}

function sortearAmigo() {
    if (validarListaAmigos()) { //Si la lista NO esta vacia, ejecuta el código
        numeroGenerado = Math.floor(Math.random() * nombreAmigos.length);
        //console.log(`numero generado ${numeroGenerado}`);

        //Recibe el nombre del ganador usando el numero generado
        resultadoNombreGanador = nombreAmigos[numeroGenerado];
        //console.log(`El resultado  es : ${resultadoNombreGanador}`);

        let listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = "";
        //Crea un elemento <li> que recibe el nombre del ganador
        let elemenetoListaResultado = document.createElement("li");

        elemenetoListaResultado.innerText = `El ganador es: ${resultadoNombreGanador}`;
        
        //Agregar el elemento <li> a la lista
        listaResultado.appendChild(elemenetoListaResultado);
    }
}

