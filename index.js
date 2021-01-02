const express = require('express');
const path = require('path');
require('dotenv').config();
const bodyParser = require("body-parser");
const notFoundRouter = require('./routes/notFoundRouter')
const authRouter = require('./routes/authRouter')
const usersRouter = require('./routes/usersRouter')

// App de Express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/login', authRouter);
app.use('/api/', usersRouter);

app.use('', notFoundRouter);

//DB Config
const { dbConnection } = require('./database/config')
dbConnection()

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});


