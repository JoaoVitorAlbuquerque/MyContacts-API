module.exports = (error, request, response, next) => {
  console.log('#### Error handler');
  console.log(error);
  response.sendStatus(500);
}; // Quando ter um Middleware que recebe 4 argumentos nesta ordem, ele é um Manipulador de erros
