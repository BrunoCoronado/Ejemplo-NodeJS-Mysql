const ejemplo = require('../db_apis/ejemplo')

module.exports.obtenerJornadas = async function (request, response, next) {
    try {
        const rows = await ejemplo.obtenerJornadas()

        response.status(200).json({
            registros: rows,
            status: 200
        })
        
    } catch (error) {
        console.log(error)
        response = utils.formarResponse(response, 'Error al obtener registros.', 404)
    }
}