const database = require('../services/database')

module.exports.obtenerJornadas = async function () {
    const result = await database.ejecutarQuery(`SELECT * FROM jornada;`);
    return result;
}