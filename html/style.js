// Validación de formulario de contacto con Bootstrap y JS
$(function() {
	// Validación de formulario personalizada
		$('#form-contacto').on('submit', function(event) {
			var form = this;
			// Validación manual de campos
			var nombre = $('#nombre').val().trim();
			var telefono = $('#telefono').val().trim();
			var correo = $('#correo').val().trim();
			var proposito = $('#proposito').val();
			var mensaje = $('#mensaje').val().trim();
			var nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}$/.test(nombre);
			var telefonoValido = /^[0-9]{7,15}$/.test(telefono);
			var correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo);
			var mensajeValido = mensaje.length >= 10;
			var propositoValido = proposito !== '';

			if (!nombreValido) {
				$('#nombre')[0].setCustomValidity('Nombre inválido');
			} else {
				$('#nombre')[0].setCustomValidity('');
			}
			if (!telefonoValido) {
				$('#telefono')[0].setCustomValidity('Teléfono inválido');
			} else {
				$('#telefono')[0].setCustomValidity('');
			}
			if (!correoValido) {
				$('#correo')[0].setCustomValidity('Correo inválido');
			} else {
				$('#correo')[0].setCustomValidity('');
			}
			if (!propositoValido) {
				$('#proposito')[0].setCustomValidity('Seleccione un propósito');
			} else {
				$('#proposito')[0].setCustomValidity('');
			}
			if (!mensajeValido) {
				$('#mensaje')[0].setCustomValidity('Mensaje muy corto');
			} else {
				$('#mensaje')[0].setCustomValidity('');
			}

			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
				$('#imagen-exito').hide();
			} else {
				// Si todo es válido, mostrar la imagen
				event.preventDefault();
				$(form).addClass('was-validated');
				$('#imagen-exito').fadeIn(700);
				// Opcional: limpiar el formulario después de mostrar la imagen
				// form.reset();
				// $(form).removeClass('was-validated');
			}
			$(form).addClass('was-validated');
		});

	// Animación: mostrar el formulario de contacto con fadeIn
	$('#contacto').hide().fadeIn(1200);

	// Animación: resaltar enlaces de navegación al hacer hover
	$('.nav-link').hover(
		function() { $(this).addClass('bg-info text-white'); },
		function() { $(this).removeClass('bg-info text-white'); }
	);
});
