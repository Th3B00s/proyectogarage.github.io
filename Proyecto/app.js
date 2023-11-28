

// Inicializa Firebase
const firebaseConfig = {
    apiKey: "tu-AIzaSyCJjwThJhbrlKiEbjNfd8gkvQR0qVbYnEMapi-key",
    authDomain: "opengarege.firebaseapp.com",
    projectId: "opengarege",
    storageBucket: "opengarege.appspot.com",
    messagingSenderId: "974433179408",
    appId: "1:974433179408:web:4806b5c7aeada723c1f795",
    measurementId: "G-4ZNN49LD7P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referencia a la base de datos
  const database = firebase.database();
  
  function guardarDatos() {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const contrasena = document.getElementById('contrasena').value;  // Modificado para reflejar el cambio de ID en el formulario
      const correo = document.getElementById('correo').value;
  
      // Guarda datos en la base de datos
      database.ref('usuarios').push({
          nombre: nombre,
          apellido: apellido,
          contrasena: contrasena,
          correo: correo
      });
  
      alert('Datos guardados correctamente.');
  }
  