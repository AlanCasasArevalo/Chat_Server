const mongoose = require('mongoose')

const dbConnection = async () => {
    const errorMessage = `Error al conectarse a mongo - hablar con el administrador`
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Base de datos de Mongo Conectada a Atlas`)
    } catch (error) {
        console.log(errorMessage, error)
        throw new Error(errorMessage)
    }
}

module.exports = {
    dbConnection
}