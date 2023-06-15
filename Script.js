function suscribir() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
  
    if (email === '') {
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }
  
    // Aquí puedes agregar tu lógica para enviar el correo de confirmación o guardar el correo en tu base de datos
    // En este ejemplo, simplemente mostraremos un mensaje en la consola
    console.log(`Gracias por suscribirte, ${email}!`);
    emailInput.value = ''; // Limpiar el campo de entrada después de suscribirse
  }