const realtime = firebase.database();

var ref;


  function SubirProducto() {
    // DATOS DE LOS PRODUCTOS
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const detalles = document.getElementById("detalles").value;
    const imagen = document.getElementById("fileInput");
    const costo = document.getElementById("precio").value;
    var file = imagen.files[0];
    var token;

    // Crea una referencia al storage de Firebase
    var storageRef = firebase.storage().ref();

      // Crea una referencia específica para tu archivo
      var fileRef = storageRef.child('p'+nombre);

      //sube el archivo
      fileRef.put(file).then(function(snapshot){
        console.log('archivo subido con exito');

        //obtener token de acceso
        fileRef.getDownloadURL().then(function(url){
          console.log('Token de acceso:',url);
          token = url;

              // Para Agregar a Firestore
              const nuevoProducto = {
                nombre: nombre,
                id: categoria,
                detalles: detalles,
                url: token,
                precio: costo,
                idProduct: id
                };

                ref = realtime.ref("Productos/" + id);

                    // Sube los datos a la base de datos
                ref.set(nuevoProducto, function (error) {
                  if (error) {
                    console.error("Error al subir los datos:", error);
                  } else {
                    console.log("Datos subidos con éxito!");

                    // Muestra el mensaje de éxito
                    document.getElementById("mensaje-exito").style.display = "block";

                    // Restablece el formulario
                    document.getElementById("formulario-producto").reset();
                  }
                });
          
        }).catch(function(error){
          console.error('Error al obtener el token de acceso:', error);
        })
      }).catch(function(error){
        console.error('Error al subir el archivo:', error);
      });
  

  }