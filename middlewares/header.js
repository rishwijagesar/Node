const express = require("express");
const bodyParser = require("body-parser");
const headers = new express.Router()

// parse body of http request to json
headers.use(express.json());
headers.use(express.urlencoded({ extended: false }));

// Middleware: Code that sits between two layers of software, sitting between the request and the response
headers.use((req, res, next) => {

    console.log(express.json());

    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );

    // Pass to next layer of middleware
    next();
});

module.exports = headers