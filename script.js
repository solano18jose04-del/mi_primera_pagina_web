document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutamos la lógica de login si estamos en la página index.html
    if (document.getElementById('loginForm')) {
        const form = document.getElementById('loginForm');
        const identifierInput = document.getElementById('identifier');
        const passwordInput = document.getElementById('password');
        const messageElement = document.getElementById('message-area');

        // ****** CLAVES DE ACCESO VÁLIDAS ********
        // Definimos una "contraseña maestra" para simular un login exitoso.
        const VALID_PASSWORD = '123'; 
        // Puedes usar cualquier identificador (correo o teléfono) con esta contraseña
        // *********************

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            messageElement.textContent = '';
            messageElement.className = 'message';

            const identifier = identifierInput.value.trim();
            const password = passwordInput.value.trim();

            // 1. Validación de campos y formato (reutilizando la lógica anterior)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^\d{10}$/; 
            let isValidFormat = emailPattern.test(identifier) || phonePattern.test(identifier);

            if (identifier === '' || password === '') {
                messageElement.textContent = '🛑 Por favor, rellena todos los campos.';
                messageElement.classList.add('error');
                return;
            }

            if (!isValidFormat) {
                messageElement.textContent = '❌ El identificador debe ser un correo electrónico válido o un número de teléfono de 10 dígitos.';
                messageElement.classList.add('error');
                return;
            }
            
            // 2. VALIDACIÓN DE CONTRASEÑA (FUNCIONALIDAD REQUERIDA)
            if (password === VALID_PASSWORD) {
                // Contraseña Correcta: Simulación de ingreso
                messageElement.textContent = '✅ Ingresando... ¡Bienvenido, Jose!';
                messageElement.classList.add('success');
                
                // Redirigir a la página de rutinas después de un breve momento
                setTimeout(() => {
                    // Esta es la parte que te permite "ingresar" a la otra página
                    window.location.href = 'dashboard.html'; 
                }, 1000);
                
            } else {
                // Contraseña Incorrecta: Mostrar mensaje de error
                messageElement.textContent = '❌ Contraseña incorrecta. Por favor, intenta de nuevo.';
                messageElement.classList.add('error');
            }

        });
        
        // Funcionalidad básica para "Olvidaste tu contraseña"
        document.querySelector('.forgot-password').addEventListener('click', function(e) {
            e.preventDefault();
            alert('En un proyecto real, se enviaría un enlace de recuperación a tu correo/teléfono.');
        });
    }
});
