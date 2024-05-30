const mensajesColl = firebase.firestore().collection('Mensajes');

function MensajeSend(){

    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('telefono').value;
    const motivo = document.getElementById('motivo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Para Agregar a Firestore
    const nuevoMensaje = {
        nombre: nombre,
        telefono: telefono,
        motivo: motivo,
        mensaje: mensaje
    }

    mensajesColl.add(nuevoMensaje)
    .then((docRef) => {
        console.log('Documento agregado con ID:', docRef.id);

        document.getElementById("mensaje-exito").style.display = "block";

        document.getElementById("formulario-producto").reset();
    })
    .catch((error) => {
        console.log('Error al agregar documento:', error);
    })

}