const app = require("./app");
const http = require("http");

const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
}
