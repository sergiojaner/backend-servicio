
const express = require('express')
const cors = require('cors');

require('dotenv').config();

const app = express();


//Conectar base de datos Mongodb


//Directorio Publico


//CORS
app.use(cors());


//Permite mostrar el JSON
app.use(express.json());

//Rutas

 //app.use('/login', require('./routes/auth'));


//Manejar demas rutas

//   app.get('*', (req, res) => {
//       res.sendFile(path.resolve( __dirname, 'public/index.html'))
//   })


app.listen(process.env.PORT, () => {
    console.log('Conectado a la base de datos')
})

