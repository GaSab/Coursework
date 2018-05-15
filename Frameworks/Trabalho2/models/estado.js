var mongoose = require('mongoose');

//criar schema
var EstadoSchema = new mongoose.Schema({
	nome: String,
	populacao: Number,
	pib: Number
});

//exportar
module.exports = mongoose.model('Estado', EstadoSchema);