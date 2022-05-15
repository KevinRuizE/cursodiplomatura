const async = require('hbs/lib/async');
var pool = require ('./bd');

// listar
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

// insertar
async function insertNovedad(obj) {
    try{
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    }catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { getNovedades, insertNovedad }