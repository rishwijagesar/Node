const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// import Routes
const testRoute = require('./routes/testRoute');

// Middlewares
app.use('/test', testRoute);

app.get('/*', (req, res) => {

   res.writeHead(200, {'Content-Type': 'text/html'});
   let html = fs.readFileSync(__dirname + '/website/index.html');
   res.end(html);

});

module.exports = app;