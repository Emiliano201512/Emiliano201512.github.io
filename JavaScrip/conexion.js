//################################################################################################
firebase.initializeApp({
    apiKey: "AIzaSyDWm5Zkv87Q2zeihxjHpd3pZYcukJtw3d0",
    authDomain: "proyecto-web-15df4.firebaseapp.com",
    projectId: "proyecto-web-15df4",
    storageBucket: "proyecto-web-15df4.appspot.com",
    messagingSenderId: "1054203514912",
    appId: "1:1054203514912:web:9dfacaaa99d7a69828ec45"
});

/*
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
        .then(userCredential => {

            console.log('sign up')
            //BASE DE DATOS

            usuariosCollection.add(nuevoUsuario)
              .then((docRef) => {
                console.log('Documento agregado con ID:', docRef.id);
              })
              .catch((error) => {
                console.log('Error al agregar documento:', error);
              });
            
        })

});

//################################################################################################
//INICIO DE SESION
const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const pass = document.querySelector('#login-pass').value;

    auth
    .signInWithEmailAndPassword(email, pass)
    .then(userCredential => {

        console.log('sign up')
    })

})

//################################################################################################
//CIERRE DE SESION
const cerrar = document.querySelector('#logout');

cerrar.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('Sesion cerrada')
    })
})
*/
/*##########################################################################################################33
// Obtiene una referencia a la colección "usuarios" en Firestore
const usuariosCollection = firebase.firestore().collection('usuarios');

////////////////////////////////////////////////
// Realiza la consulta a Firestore para obtener los datos
usuariosCollection.get()
  .then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      // Agrega los datos del documento al arreglo 'data'
      data.push(doc.data());
    });

    // Llama a la función mostrarData con los datos obtenidos
    mostrarData(data);
  })
  .catch((error) => {
    console.error('Error al obtener datos de Firestore:', error);
  });

// Función para mostrar los datos en la página
const mostrarData = (data) => {
  console.log(data);
  let body = '';
  for (let i = 0; i < data.length; i++) {
    body += `<tr>
                 <td>${data[i].nombre}</td>
                 <td>${data[i].correo}</td>
                 </tr>`;
  }

  //document.getElementById('data').innerHTML = body;
};
*##########################################################################################################33

/*
//################################################################################################
//EXTRAER DATOS DE REALTIME FIREBASE
const realtimeDB = firebase.database();

const datos = realtimeDB.ref('/Productos');

//Formatear Datos
function agregarElementosdiv() {
  const contenedor = document.getElementById('contenedor-de-datos');

  //obtener datos de realtime
  datos.once('value')
   .then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const name = childSnapshot.val().nombre;
      const deta = childSnapshot.val().detalles;
      const img = childSnapshot.val().url;

      //console.log(name, deta, img);
      //crear nuevo elemento y agregarlo al contenedor
      const nuevoElemento = document.createElement('div');
      nuevoElemento.className = 'col-lg-4 col-md-6 portfolio-item filter-app';

      nuevoElemento.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${img}" class="img-fluid" alt="">
        <div class="portfolio-links">
          <a href="${img}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${name}"><i class="bi bi-plus"></i></a>
          <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
        </div>
        <div class="portfolio-info">
          <h4>${name}</h4>
          <p>${deta}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(nuevoElemento);
    });
   })
   .catch((error) => {
    console.error('Error al obtener datos de Firebase Realtime: ', error);
   });
}

//Llamar a la función para agregar elementos al cargar la página
window.addEventListener('DOMContentLoaded', agregarElementosdiv);
*/

//////////////////////////////////////////////////////////////////////////////




//min 38 => https://www.youtube.com/watch?v=1rLBjRF0ep0&t=155s


/*
var db = firebase.firestore();

db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // Accede a los valores específicos almacenados en cada documento
        const username = doc.data().nombre;
        const email = doc.data().correo;

        // Muestra los valores en la consola

        console.log(`Usuario: ${username}, Email: ${email}`);
    });
});
*/

