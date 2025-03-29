function filterProducts(category) {
    const products = document.querySelectorAll('#gallery-container .col-md-4 ');
    products.forEach(product => {
      if (category === '' || product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  

  
function loadImageDetailsFromURL() {
   const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
   const title = params.get('title');
   const description = params.get('description');
   const author = params.get('author');
  
   if (src && title && description && author) {
      document.getElementById('detailed-img').src = src;
      document.getElementById('detailed-title').textContent = title;
     document.getElementById('detailed-description').textContent = description;
     document.getElementById('detailed-author').textContent = author;

    }
 }
  
  // Cargar detalles de la imagen si estamos en la página de detalles
  if (window.location.pathname.endsWith('detalle.html')) {
    loadImageDetailsFromURL();
 }
  

  function validateForm() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor complete todos los campos.');
      return false;
    }
    alert('Formulario enviado correctamente.');
    return true;
  }
  