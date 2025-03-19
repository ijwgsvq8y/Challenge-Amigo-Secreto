let nombres = [];
let nombreSecreto = sortearAmigo()
let listaNombreAleatorio = []


function agregarAmigo() {
	nombres.push(document.getElementById("amigo").value);
	console.log(nombres)
	var ul = document.getElementById("listaAmigos");
	ul.innerHTML = "";
	for (var i = 0; i < nombres.length; i++) {
		var li = document.createElement("li");
		li.textContent = nombres[i];
		ul.appendChild(li);
	
}
	limpiarInput()
	asignarTextoElemneto("textoResultado", "")


}



function asignarTextoElemneto(elemento, texto) {
	let elementoHTML = document.getElementById(elemento);
	elementoHTML.innerHTML = texto;
}






function sortearAmigo() {
	
	if (nombres.length === 0) {
		asignarTextoElemneto("textoResultado", "No hay amigos para sortear");
		return;
	} 
	let indiceAleatorio = Math.floor(Math.random() * nombres.length);
	let nombreAleatorio = nombres[indiceAleatorio]
	
	
	var ul = document.getElementById("resultado");
	var li = document.createElement("li")
	li.textContent = nombreAleatorio
	ul.appendChild(li)
	console.log(nombreAleatorio)
	

if (listaNombreAleatorio.includes(nombreAleatorio)) {
    // Eliminamos el nombre de la lista
    listaNombreAleatorio = listaNombreAleatorio.filter(item => item !== nombreAleatorio);
    
    // Encontramos el índice correcto del <li> que contiene el nombre
    let elementosLi = Array.from(ul.children); // Convertimos a array para buscar
    let liAEliminar = elementosLi.find(li => li.textContent === nombreAleatorio);

    if (liAEliminar) {
        ul.removeChild(liAEliminar); // Eliminamos el <li>
    }

    // Evitamos una recursión infinita asegurándonos de que aún hay elementos disponibles
    if (listaNombreAleatorio.length > 0) {
        return sortearAmigo();
    }
} else {

		listaNombreAleatorio.push(nombreAleatorio);
		nombres = nombres.filter(nombre => nombre !== nombreAleatorio);
	}



	

}

function limpiarInput() {
	document.querySelector("#amigo").value = ""
}

