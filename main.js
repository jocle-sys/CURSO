//algoritmo de condicional de validacion de usuario y contraseña

/*const USUARIO_BASE = "JOSE" //usuario de la base de datos
const CONTRASEÑA_BASE = "123456"; //contraseña de la base de datos

let usuarioIngrsado = prompt("Ingresar usaurio");
let contraseñaIngresada = prompt("Ingresar contraseña");

if (
    contraseñaIngresada == CONTRASEÑA_BASE && usuarioIngrsado == USUARIO_BASE 
  ) {
  alert("BIENVENIDOS AL SISTEMA"); //se inicia sesion con el usuario cargado
} else {
   alert("DATOS INGRESADOS INCORRECTOS");
} */

// algoritmo utilizando un ciclo
/*const LIMITE = 12; // Cantidad turnos por dia del taller mecanico
for (let turno = 1; turno <= LIMITE; turno++) {
 
  let cliente = prompt("Ingresar nombre y apellido");
  let vehiculo = prompt("ingrese marca del vehiculo");
  let modelo = prompt("ingrese modelo del vehiculo");

  
  console.log(" Turno asignado " + turno + " Cliente: " + cliente + " Vehiculo: " + vehiculo + " Modelo: " + modelo);
} */



/*
// ENTREGA N° 2
// EJERCICIO PARA CREAR UNA LISTA DE INVITADO QUE ES GUARADADA EN UN ARRAY



let   cantidad     = prompt("INGRESE LA CANTIDAD DE INVITADOS PARA LA FIESTA"); //CANTIDAD DE INVITADOS PARA FIESTA
const listaInvitados = []; //ARRAY DE LA FIESTA
//CONDICION PARA SABER SI INGRESO UN NUMERO EN LA CANTIDAD DE INVITADOS
if (!isNaN(cantidad)) {
  
  do{
   let entrada = prompt("Ingresar nombre");//INGRESAMOS AL INVITADO
   listaInvitados.push(entrada.toUpperCase());// LO PONEMOS EN MAYUSCULA Y AGREGAMOS AL INVITADO AL ARRAY
   console.log(listaInvitados.length +" "+entrada.toUpperCase()); 
  }while(listaInvitados.length != cantidad) 
  const nuevaLista = listaInvitados.concat(["ESTAN INVITADOS A LA FIESTA"]);

  //MUESTRA LA LISTA DE INVITADO 
  alert(nuevaLista.join("\n"));

} else {

  alert("INGRESE UN NUMERO");//ALERTA PARA QUE INGRESE UN NUMERO EN LA CANTIDAD DE INVITADOS

}

let invitadobuscado = prompt("ingrese el nombre del invitado que quiere buscar"); //INGRESO DEL INVITADO A BUSCAR

let elementoEncontrado = listaInvitados.find(function(elemento) {
  return elemento === (invitadobuscado.toUpperCase());
});

if (elementoEncontrado !== undefined) {
  alert (elementoEncontrado + " SI ESTA INVITADO A LA FIESTA");
} else {
  alert (invitadobuscado + " NO ESTA INVITADO A LA FIESTA");
}
*/
//ENTREGA N° 3

// Obtén la lista de personas desde localStorage al cargar la página
var personas = JSON.parse(localStorage.getItem('personas')) || [];

// Función para mostrar la lista de personas en el DOM
function mostrarPersonas() {
    var lista = document.getElementById("lista-personas");
    lista.innerHTML = ''; // Borra la lista antes de mostrarla nuevamente

    personas.forEach(function(persona) {
        var nuevaPersona = document.createElement("li");
        nuevaPersona.textContent = persona.nombre;
        lista.appendChild(nuevaPersona);
    });
}

// Agregar una persona a la lista
document.getElementById("agregar-persona").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    personas.push({ nombre: nombre });

    // Guarda la lista de personas 
    localStorage.setItem('personas', JSON.stringify(personas));

    // Muestra la lista actualizada 
    mostrarPersonas();

    // Limpia el campo de entrada
    document.getElementById("nombre").value = "";
});

// Limpiar la lista de personas
document.getElementById("limpiar-lista").addEventListener("click", function() {
    localStorage.removeItem('personas');
    personas = [];
    mostrarPersonas();
});

// Mostrar la lista de personas al cargar la página
mostrarPersonas();

