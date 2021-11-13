const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const header_middleware = require("./middlewares/header");

app.use(cors());
app.use(header_middleware);

// import Routes
const testRoute = require('./routes/testRoute');
const ledRoute = require('./routes/ledRoute');
const servoRoute = require('./routes/servoRoute');

// Middlewares
app.use('/test', testRoute);
app.use('/led', ledRoute);
app.use('/servo', servoRoute);

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Project Node',
        version: '1.0.0',
        description: 'Project Node Swagger page'
    },
    servers: [
        {
          url: 'http://localhost:8080',
          description: 'Development server',
        },
      ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/*', (req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
  let html = fs.readFileSync(__dirname + '/website/index.html');
  res.end(html);

});

module.exports = app;