const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Ejemplo ruta
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(3000, () => console.log('API CRM corriendo en puerto 3000'));

