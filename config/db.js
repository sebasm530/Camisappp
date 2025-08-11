// db.js
const mongoose = require('mongoose'); // Importamos la librería Mongoose
require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env
// URI de conexión a MongoDB (reemplaza los datos según tu configuración)
const mongoURI = process.env.DB_HOST;

// Opciones recomendadas para evitar advertencias
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, options);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
  }
};

// Exportamos la función de conexión
module.exports = connectDB;
