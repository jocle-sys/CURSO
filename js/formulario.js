let datos = [];

(() => {
  'use strict'

  
  const forms = document.querySelectorAll('.needs-validation')

  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// Obtener datos del localStorage si existen
if (localStorage.getItem('datos')) {
  datos = JSON.parse(localStorage.getItem('datos'));
}

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  let nombre = document.getElementById('validationCustom01').value;
  let apellido = document.getElementById('validationCustom02').value;
  let email = document.getElementById('validationCustomUsername').value;
  let pago = document.getElementById('validationCustom04').value;

  let nuevoDato = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    pago: pago
  };

  datos.push(nuevoDato);
 formulario.reset();
  // Guardar los datos en el localStorage
  localStorage.setItem('datos', JSON.stringify(datos));

 




  // PARA OBTENER LA FECHA ACTUAL
  let fechaActual = new Date();


let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1; 
let anio = fechaActual.getFullYear();


let fechaFormateada = `${dia}/${mes}/${anio}`;

  let fila = tabla.insertRow();

 
  let celdaNombre = fila.insertCell();
  let celdaApellido = fila.insertCell();
  let celdaEmail = fila.insertCell();
  let celdaPago = fila.insertCell();
  let celdaFecha = fila.insertCell();

  celdaNombre.textContent = nombre;
  celdaApellido.textContent = apellido;
  celdaEmail.textContent = email;
  celdaPago.textContent = pago;
  celdaFecha.textContent = fechaFormateada;
  
});



  
