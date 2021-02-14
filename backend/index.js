const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const routes = require('./src/interfaces/routes');
const _port = 3000;

server.use(morgan("combined"));
server.use(cors({credentials: true, origin: true}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(routes);

server.listen( _port, () => {
    console.log(`Server started on port ${_port}`);
});