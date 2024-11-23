// Función para manejar reservaciones
function handleReservation(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const roomType = document.getElementById('roomType').value;
    
    const bookingMessage = document.getElementById('bookingMessage');

    // Validación de fechas
    if (new Date(checkIn) >= new Date(checkOut)) {
        bookingMessage.textContent = 'La fecha de entrada debe ser antes de la fecha de salida.';
        bookingMessage.className = 'message error';
        return;
    }

    // Muestra confirmación
    bookingMessage.textContent = `Gracias, ${name}. Tu reservación para una habitación ${roomType} del ${checkIn} al ${checkOut} ha sido confirmada.`;
    bookingMessage.className = 'message success';
}

// Función para manejar el contacto
function handleContact(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const messageContent = document.getElementById('message').value;

    const contactMessage = document.getElementById('contactMessage');

    // Simula el envío del mensaje
    contactMessage.textContent = `Gracias, ${name}. Tu mensaje ha sido enviado al equipo de soporte. Te responderemos pronto al correo ${email}.`;
    contactMessage.className = 'message success';
}

// Otras funciones existentes del modal de inicio de sesión
// (Estas ya estaban en tu archivo original y no han cambiado)

// Function to open the modal
function openModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}
