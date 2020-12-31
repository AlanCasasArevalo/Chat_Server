const moongoose = require('mongoose')

const dbConnection = async () => {
    const errorMessage = `Error al conectarse a mongo - hablar con el administrador`
    try {
        console.log(`Inicio de configuracion`)
    } catch (error) {
        console.log(errorMessage, error)
        throw new Error(errorMessage)
    }
}

module.exports = {
    dbConnection
}