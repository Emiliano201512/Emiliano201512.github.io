// Obtener una referencia a la colección en Firestore
const mensaCollection = firebase.firestore().collection('Mensajes');

// Obtener datos de Firestore
mensaCollection.get()
  .then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    mostrarData(data);
  })
  .catch((error) => {
    console.error('Error al obtener datos de Firestore:', error);
  });

const mostrarData = (data) => {
  console.log(data);
  let body = '';
  for (let i = 0; i < data.length; i++) {
    body += `<tr>
               <td>${data[i].nombre}</td>
               <td>${data[i].telefono}</td>
               <td>${data[i].motivo}</td>
               <td>${data[i].mensaje}</td>
             </tr>`;
  }

  document.getElementById('data').innerHTML = body;
};