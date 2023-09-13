//algoritmo de condicional de validacion de usuario y contraseña

const USUARIO_BASE = "JOSE" //usuario de la base de datos
const CONTRASEÑA_BASE = "123456"; //contraseña de la base de datos

let usuarioIngrsado = prompt("Ingresar usaurio");
let contraseñaIngresada = prompt("Ingresar contraseña");

if (
    contraseñaIngresada == CONTRASEÑA_BASE && usuarioIngrsado == USUARIO_BASE 
  ) {
  alert("BIENVENIDOS AL SISTEMA"); //se inicia sesion cone el usuario cargado
} else {
   alert("DATOS INGRESADOS INCORRECTOS");
} 

// algoritmo utilizando un ciclo
const LIMITE = 12; // Cantidad turnos por dia del taller mecanico
for (let turno = 1; turno <= LIMITE; turno++) {
 
  let cliente = prompt("Ingresar nombre y apellido");
  let vehiculo = prompt("ingrese marca del vehiculo");
  let modelo = prompt("ingrese modelo del vehiculo");

  
  console.log(" Turno asignado " + turno + " Cliente: " + cliente + " Vehiculo: " + vehiculo + " Modelo: " + modelo);
} 
