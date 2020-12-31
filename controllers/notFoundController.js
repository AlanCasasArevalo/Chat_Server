exports.notFoundMethod = (req, res) => {
    res.status(404).json({
        result: false,
        message: 'No existe esa direccion'
    })
}