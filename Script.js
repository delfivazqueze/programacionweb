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