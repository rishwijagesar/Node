const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const header_middleware = require("./middlewares/header");

app.use(cors());
// use middleware
app.use(header_middleware);

// import Routes
 const account = require('./routes/accountRoute');
const ledRoute = require('./routes/ledRoute');
const servoRoute = require('./routes/servoRoute');
const stepperRoute = require('./routes/stepperRoute');

// Middlewares
app.use('/account', account);
app.use('/led', ledRoute);
app.use('/servo', servoRoute);
app.use('/stepper', stepperRoute);

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

app.get('/presentation', (req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
  let html = fs.readFileSync(__dirname + '/website/presentation.html');
  res.end(html);

});

app.get('/*', (req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});
  let html = fs.readFileSync(__dirname + '/website/index.html');
  res.end(html);

});

module.exports = app;