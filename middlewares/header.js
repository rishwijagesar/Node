const express = require("express");
const bodyParser = require("body-parser");
const headers = new express.Router()

// parse body of http request to json
headers.use(bodyParser.json());
headers.use(bodyParser.urlencoded({ extended: false }));

// Middleware: Code that sits between two layers of software, sitting between the request and the response
headers.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );
    next();
});

module.exports = headers