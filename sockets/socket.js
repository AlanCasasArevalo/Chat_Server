const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', client => {
    // console.log('Cliente conectado');

    client.on('disconnect', () => {
        // console.log('Cliente desconectado');
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
