module.exports = (request, response, next) => {
  const allowedOrigins = ['http://localhost:3000']; // Lista de origins permitidas para fazer a requisição

  const origin = request.header('Origin');
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    // Wildcard -> Coringa -> "*", deixa passar tudo, usado como segundo argumento na CORS.
    response.setHeader('Access-Control-Allow-Origin', origin); // CORS
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', '10'); // Cacheando o resultado do Preflight (tempo em segundos)
  }

  next();
};
