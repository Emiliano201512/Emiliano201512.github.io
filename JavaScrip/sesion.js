const auth = firebase.auth();

// Obtiene una referencia a la colección "usuarios" en Firestore
const usuariosCollection = firebase.firestore().collection('usuarios');

//################################################################################################
//REGISTRO NUEVO
const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const Nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#pass').value;

    // Para Agregar a Firestore
    const nuevoUsuario = {
        nombre: Nombre,
        correo: email,
        contra: password
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {

        usuariosCollection.add(nuevoUsuario)
        .then((docRef) => {
          console.log('Documento agregado con ID:', docRef.id);
          window.location = 'index.html'
        })
        .catch((error) => {
          console.log('Error al agregar documento:', error);
        });
        
        // Después de crear el usuario, puedes actualizar su información con el nombre
        return userCredential.user.updateProfile({
            displayName: Nombre
            });

        })
      .catch(function(error) {
        // Manejar errores de registro
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
  });
/*
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {

            console.log('sign up')
            //BASE DE DATOS

            usuariosCollection.add(nuevoUsuario)
              .then((docRef) => {
                console.log('Documento agregado con ID:', docRef.id);
                window.location = 'index.html'
              })
              .catch((error) => {
                console.log('Error al agregar documento:', error);
              });
            
        })*/


});

//################################################################################################
//INICIO DE SESION
const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const pass = document.querySelector('#login-pass').value;

    if (email === 'admin@gmail.com' && pass === 'root') {
        alert('Soy admin');
        window.location = 'admin.html'; // Cambiar
    } else {
        auth.signInWithEmailAndPassword(email, pass)
            .then(userCredential => {
                // La autenticación fue exitosa
                console.log('Inicio de sesión exitoso');
                window.location = 'index.html';
            })
            .catch(error => {
                // Manejar errores de autenticación
                alert('Error de autenticación: ' + error.message);
            });
    }
});
////////////////////////////////////////////////////////////////
//INICIO DE SESION SIN REGISTRO

const sinR = document.getElementById('no-registro');

sinR.addEventListener('click', e => {
  window.location = 'index.html'
})
