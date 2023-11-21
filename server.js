const express = require('express');
const mysql = require('mysql2'); //o "mysql" 

const app = express();
// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asistencia_duoc',
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Ruta de ejemplo para obtener datos de la base de datos
app.get('/usuario', (req, res) => {
  // Consulta a la base de datos
  db.query('SELECT * FROM usuario', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(results);
    }
  });
});

// Puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
