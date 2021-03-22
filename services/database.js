const mysql = require('mysql');
const dbConfig = require('../config/database');

const pool = new mysql.createConnection(dbConfig.config)

async function initialize(){
    pool.connect(err => {
        if(err) console.log(`Error al conectarse a la base de datos!\nERROR: ${err}`)
        else console.log('Conexión a la base de datos establecida')
    })
}

async function close(){
    await pool.end()
}

module.exports.initialize = initialize;
module.exports.close = close;