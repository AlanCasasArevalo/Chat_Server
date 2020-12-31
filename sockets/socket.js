const Bands = require("../models/Bands");
const Band = require("../models/band");
const { io } = require('../index');

const bands = new Bands()

bands.addBand('Queen')
bands.addBand('Marea')
bands.addBand('Metallica')
bands.addBand('Albertucho')

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
