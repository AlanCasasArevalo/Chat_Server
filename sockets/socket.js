const {checkJWT} = require("../helpers/jwt");
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    // console.log(` HEADERS ===> ${client.handshake.headers['x-token']}`)

    const [valid, uid] = checkJWT(client.handshake.headers['x-token'])

    console.log(`Valido ${valid} uid ${uid}`)
    if (!valid || typeof valid === 'undefined') {
        return client.disconnect()
    }

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
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
