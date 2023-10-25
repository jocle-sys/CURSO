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

 // Obtén el carrito desde localStorage al cargar la página
 let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

 // Lista de productos disponibles 
 let productosDisponibles = [
     { id: 1, nombre: "CAJA DE TE", precio: 10.00 },
     { id: 2, nombre: "BANDEJA", precio: 20.00 },
     { id: 3, nombre: "COFRE", precio: 130.00 },
     {id: 3, nombre: "CAMION", precio: 330.00},
     {id: 3, nombre: "CUADRO", precio: 120.00},
     {id: 3, nombre: "PANERA", precio: 500.00},
     {id: 3, nombre: "HUEVERA", precio: 300.00},
 ];

 // Función para mostrar los productos en el carrito 
 function mostrarCarrito() {
     let carritoElement = document.getElementById("carrito");
     let productosElement = document.getElementById("productos");

     // Borra los elementos anteriores antes de mostrarlos nuevamente
     carritoElement.innerHTML = '';
     productosElement.innerHTML = '';

     // Mostrar productos en el carrito
     let total = 0;
     carrito.forEach(function(item) {
         let producto = productosDisponibles.find(function(producto) {
             return producto.id === item.id;
         });

         let newItem = document.createElement("li");
         newItem.textContent = producto.nombre + " - $" + producto.precio;
         carritoElement.appendChild(newItem);

         // Suma el precio al total
         total += producto.precio;
     });

     // Muestra el total en el DOM
     document.getElementById("total-precio").textContent = "$" + total.toFixed(2);

     // Mostrar productos disponibles
     productosDisponibles.forEach(function(producto) {
         let newItem = document.createElement("li");
         newItem.textContent = producto.nombre + " - $" + producto.precio;

         let botonAgregar = document.createElement("button");
         botonAgregar.textContent = "Agregar al Carrito";
         botonAgregar.addEventListener("click", function() {
             agregarAlCarrito(producto);
         });

         newItem.appendChild(botonAgregar);
         productosElement.appendChild(newItem);
     });
 }

 // Función para agregar un producto al carrito
 function agregarAlCarrito(producto) {
     carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio });

     // Guarda el carrito en localStorage
     localStorage.setItem('carrito', JSON.stringify(carrito));

     // Muestra el carrito actualizado en el DOM
     mostrarCarrito();
 }

 // Botón para limpiar el carrito
 let limpiarCarritoButton = document.getElementById("limpiar-carrito");
 limpiarCarritoButton.addEventListener("click", function() {
     carrito = []; // Vacía el carrito
     localStorage.removeItem('carrito'); // Elimina el carrito de localStorage
     mostrarCarrito(); // Actualiza el DOM
 });

 // Mostrar el carrito al cargar la página
 mostrarCarrito();
