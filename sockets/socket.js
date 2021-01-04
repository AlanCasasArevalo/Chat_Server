const {userConnectionStatus} = require("../controllers/socketController");
const {checkJWT} = require("../helpers/jwt");
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    const [valid, uid] = checkJWT(client.handshake.headers['x-token'])

    if (!valid || typeof valid === 'undefined') {
        return client.disconnect()
    }

    userConnectionStatus(uid, true)

    //Ingresar al cliente a una sala
    client.join(uid)

    //Escuchar el mensaje personal del cliente
    client.on('personal_message', ( payload ) => {
        console.log('Mensaje desde Flutter => ', payload);
        io.to(payload.to).emit('personal_message', payload)
    });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        userConnectionStatus(uid, false)
    });

    // client.on('mensaje', ( payload ) => {
    //     // console.log('Mensaje', payload);
    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    // });

    // client.on('new_message', (payload) => {
    //     // io.emit('new_message', payload)
    //     client.broadcast.emit('new_message', payload)
    //     console.log(`${payload}`)
    // })

});
