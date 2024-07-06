document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }


        alert('Formulario enviado correctamente.');
        form.reset();
    });


    document.querySelector('.btn-limpiar').addEventListener('click', () => {
        form.reset();
    });
});
