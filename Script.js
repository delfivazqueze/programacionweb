function suscribir() {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  if (email === '') {
    alert('Por favor, ingrese su correo electrónico.');
    return;
  }
  else{
    alert(`Correo electrónico guardado: ${email}`);
  }
  
  emailInput.value = '';
}

const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
const carritoLista = document.getElementById('lista-carrito');
const carritoTotal = document.getElementById('total-carrito');
const carrito = document.getElementById('carrito');
const carritoImagen = document