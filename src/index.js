const express = require('express');
require('express-async-errors'); // Biblioteca para pegar erros de métodos assíncronos

const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

// Usa-se a função app.use() para criar um Middleware
// Usa-se as rotas com a função ".use()"

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🚀 Server started at http://localhost:3001'));
