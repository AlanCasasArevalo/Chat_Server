const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


