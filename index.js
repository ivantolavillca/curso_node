const express = require('express');
const app = express();
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const servidor = http.createServer(app);
// const router = express.Router();
const db = require('./src/config/db');
const router = require('./src/router/rutas_principales');
require('dotenv').config({ path: '.env' });
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

// router.route("/").get((request, response) => {
//   try {
//     response.status(200).json({
//       message: "CURSO DE NODEJS",
//       carrera: "INGENIERIA DE SISTEMAS",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

db.sync()
  .then(() => console.log("CONEXION A BASE DE DATOS EXITOSA"))
    .catch((error) => console.log(`${error}`),
    console.log("ERRROR AL CONCECTARSE A LA BASE DE DATOS"));

const port =process.env.PORT || 5000
servidor.listen(port, () => {
    console.log('conectado en el puerto ' + port);
})