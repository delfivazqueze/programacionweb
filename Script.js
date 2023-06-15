function suscribir() {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  if (email === '') {
    alert('Por favor, ingrese su correo electrónico.');
    return;
  }

  // Guardar el correo electrónico en tu sistema de almacenamiento (ejemplo: en una base de datos)
  // Aquí puedes agregar tu lógica para guardar el correo electrónico
  // En este ejemplo, simplemente mostraremos un mensaje en la consola
  console.log(`Correo electrónico guardado: ${email}`);

  // Limpiar el campo de entrada después de guardar el correo electrónico
  emailInput.value = '';
}