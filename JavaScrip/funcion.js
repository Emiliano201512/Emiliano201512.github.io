//################################################################################################
//EXTRAER DATOS DE REALTIME FIREBASE
const realtimeDB = firebase.database();
const datos = realtimeDB.ref('/Productos');

const contenedor = document.getElementById('contenedor-de-datos');
const cera = document.getElementById('cera');
const todo = document.getElementById('all');
const acero = document.getElementById('acero');

//Funcion para agregar elementos div
function crearElementoPortfolio(img, name, deta, precio, idProduct) {
    const nuevoElemento = document.createElement('div');
    nuevoElemento.className = 'col-lg-4 col-md-6 portfolio-item filter-app';
  
    nuevoElemento.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${img}" class="img-fluid" alt="">
        <div class="portfolio-links">
           <a onClick="mostrarDiv('infoProduct-${idProduct}')" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Información"><i class="bi bi-plus"></i></a>
          <a href="${img}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Expandir"><i class='bx bx-expand-alt'></i></a>
        </div>
      
      </div>
      <div class="infoProduct" id="infoProduct-${idProduct}">
          <label class="detalle"> Producto: </label> <label>${name}</label> <br>
          <label class="detalle"> Detalles: </label> <label>${deta}</label> <br>
          <label class="detalle"> Precio: </label> <label>$${precio}</label> <br>
          <button class="cotizar" id = 'cotizar' onclick="redirigir()" >Cotizar</button>
        </div>
      `;
  
    contenedor.appendChild(nuevoElemento);
  }

  function redirigir() {
    // Cambia 'URL_DESTINO' por la URL a la que deseas redirigir
    window.location.href = 'formulario.html';
}


//Funcion para mostrar todos los productos
  function todasCategorias() {
    datos.once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const name = childSnapshot.val().nombre;
          const deta = childSnapshot.val().detalles;
          const img = childSnapshot.val().url;
          const precio = childSnapshot.val().precio;
          const idProduct = childSnapshot.val().idProduct;

          crearElementoPortfolio(img, name, deta, precio, idProduct);
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de Firebase Realtime: ', error);
      });
  }
  
// funcion para filtrar por acero
  function filtroAcero() {
    contenedor.innerHTML = '';
  
    datos.once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const name = childSnapshot.val().nombre;
          const deta = childSnapshot.val().detalles;
          const img = childSnapshot.val().url;
          const cat = childSnapshot.val().id;
          const precio = childSnapshot.val().precio;
          const idProduct = childSnapshot.val().idProduct;
  
          if (cat == 2) {
            crearElementoPortfolio(img, name, deta, precio, idProduct);
          }
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de Firebase Realtime: ', error);
      });
  };

  // funcion para filtrar por acero
  function filtroCeramica() {
    contenedor.innerHTML = '';
  
    datos.once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const name = childSnapshot.val().nombre;
          const deta = childSnapshot.val().detalles;
          const img = childSnapshot.val().url;
          const cat = childSnapshot.val().id;
          const precio = childSnapshot.val().precio;
          const idProduct = childSnapshot.val().idProduct;
  
          if (cat == 1) {
            crearElementoPortfolio(img, name, deta, precio, idProduct);
          }
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de Firebase Realtime: ', error);
      });
  };

    // funcion para filtrar por textiles
    function filtroTextiles() {
      contenedor.innerHTML = '';
    
      datos.once('value')
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const name = childSnapshot.val().nombre;
            const deta = childSnapshot.val().detalles;
            const img = childSnapshot.val().url;
            const cat = childSnapshot.val().id;
            const precio = childSnapshot.val().precio;
            const idProduct = childSnapshot.val().idProduct;
    
            if (cat == 3) {
              crearElementoPortfolio(img, name, deta, precio, idProduct);
            }
          });
        })
        .catch((error) => {
          console.error('Error al obtener datos de Firebase Realtime: ', error);
        });
    };

        // funcion para filtrar por textiles
        function filtroVidrio() {
          contenedor.innerHTML = '';
        
          datos.once('value')
            .then((snapshot) => {
              snapshot.forEach((childSnapshot) => {
                const name = childSnapshot.val().nombre;
                const deta = childSnapshot.val().detalles;
                const img = childSnapshot.val().url;
                const cat = childSnapshot.val().id;
                const precio = childSnapshot.val().precio;
                const idProduct = childSnapshot.val().idProduct;
        
                if (cat == 4) {
                  crearElementoPortfolio(img, name, deta, precio, idProduct);
                }
              });
            })
            .catch((error) => {
              console.error('Error al obtener datos de Firebase Realtime: ', error);
            });
        };

            // funcion para filtrar por madera
    function filtroMadera() {
      contenedor.innerHTML = '';
    
      datos.once('value')
        .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const name = childSnapshot.val().nombre;
            const deta = childSnapshot.val().detalles;
            const img = childSnapshot.val().url;
            const cat = childSnapshot.val().id;
            const precio = childSnapshot.val().precio;
            const idProduct = childSnapshot.val().idProduct;
    
            if (cat == 5) {
              crearElementoPortfolio(img, name, deta, precio, idProduct);
            }
          });
        })
        .catch((error) => {
          console.error('Error al obtener datos de Firebase Realtime: ', error);
        });
    };

  //Botones
  cera.addEventListener('click', function() {
    filtroCeramica();
    cera.classList.add('filter-active');
    todo.classList.remove('filter-active');
    acero.classList.remove('filter-active');
    textiles.classList.remove('filter-active');
    madera.classList.remove('filter-active');
    vidrio.classList.remove('filter-active');
  })

  todo.addEventListener('click', function(){
    contenedor.innerHTML = '';
    todasCategorias();
    cera.classList.remove('filter-active');
    todo.classList.add('filter-active');
    acero.classList.remove('filter-active');
    textiles.classList.remove('filter-active');
    madera.classList.remove('filter-active');
    vidrio.classList.remove('filter-active');
  })

  acero.addEventListener('click', function(){
    filtroAcero();
    cera.classList.remove('filter-active');
    todo.classList.remove('filter-active');
    acero.classList.add('filter-active');
    textiles.classList.remove('filter-active');
    madera.classList.remove('filter-active');
    vidrio.classList.remove('filter-active');
  })

  textiles.addEventListener('click', function() {
    filtroTextiles();
    cera.classList.remove('filter-active');
    todo.classList.remove('filter-active');
    acero.classList.remove('filter-active');
    textiles.classList.add('filter-active');
    madera.classList.remove('filter-active');
    vidrio.classList.remove('filter-active');
  })

  vidrio.addEventListener('click', function(){
    filtroVidrio();
    cera.classList.remove('filter-active');
    todo.classList.remove('filter-active');
    acero.classList.remove('filter-active');
    textiles.classList.remove('filter-active');
    madera.classList.remove('filter-active');
    vidrio.classList.add('filter-active');
  })

  madera.addEventListener('click', function(){
    filtroMadera();
    cera.classList.remove('filter-active');
    todo.classList.remove('filter-active');
    acero.classList.remove('filter-active');
    textiles.classList.remove('filter-active');
    madera.classList.add('filter-active');
    vidrio.classList.remove('filter-active');
  })

  //agregar a la pagina
  window.addEventListener('DOMContentLoaded', todasCategorias);


  