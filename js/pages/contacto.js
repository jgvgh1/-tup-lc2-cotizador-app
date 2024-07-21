document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
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

        
        const templateParams = {
            from_name: nombre.value,
            from_email: email.value,
            message: mensaje.value
        };

        
        emailjs.send('miserviciogmail', 'template_bnom28m', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Formulario enviado correctamente.');
                form.reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Error al enviar el formulario. Inténtalo de nuevo más tarde.');
            });
    });

    
    document.querySelector('.btn-limpiar').addEventListener('click', () => {
        form.reset(); 
    });
});
