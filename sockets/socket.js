const {userConnectionStatus, saveMessageInDDBB} = require("../controllers/socketController");
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
    client.on('personal_message', async ( payload ) => {
        // console.log('Mensaje desde Flutter => ', payload);
        await saveMessageInDDBB(payload)
        io.to(payload.to).emit('personal_message', payload)
    });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        userConnectionStatus(uid, false)
    });
});
