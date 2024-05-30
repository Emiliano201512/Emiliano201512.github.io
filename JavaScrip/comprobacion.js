
const auth = firebase.auth();

//################################################################################################
//CIERRE DE SESION

const cerrar = document.querySelector('#boton-cierre-sesion');

cerrar.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location = 'login.html';
        console.log('Sesion cerrada')
    })
})


// Agrega un observador de estado de autenticación para manejar cambios en el estado de autenticación
const Regist = document.querySelector('.Registrado')
const NoRegist = document.querySelector('.noRegistrado')
//const btnCoti = document.querySelector('.regis')
//const element = document.getElementById('cotizar')

auth.onAuthStateChanged(function(user) {
  //const element = document.getElementById('cotizar');

    if (user) {
      // El usuario está autenticado
      var displayName = user.displayName;
      
      Regist.classList.remove('ocultar');
      NoRegist.classList.add('ocultar');
      //element.style.display = 'block';

      // displayName contiene el nombre del usuario
      console.log('Nombre del usuario:', displayName);
      // Actualiza el contenido del elemento HTML con el nombre del usuario
      document.getElementById('nombreUsuario').innerText = 'Hola, ' + displayName;
      
      // Puedes mostrar el nombre en tu página web
      //document.getElementById('nombreUsuario').innerText = 'Hola, ' + displayName;
    } else {
      // No hay usuario autenticado, puedes redirigir o hacer otras acciones
      console.log('No hay usuario autenticado');
      Regist.classList.add('ocultar');
      NoRegist.classList.remove('ocultar');
      //element.style.display = 'none';
    }
  });