const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const estadoController = require('./controllers/estado');
//sync mongoose
mongoose.connect('mongodb://localhost:27017/trabalho2');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;


var router = express.Router();

//ejs
app.set('view engine', 'ejs');
//main
app.use(express.static('public'));


//---------------------------------------------------------------------------------API-----------------------------------------


// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on beer!' });
});


//nova rota /estados
var estadosRota = router.route('/estados')
  .post(estadoController.postEstados) //POST
  .get(estadoController.getEstados);    //GET GERAL


//recupera especifico
//nova rota
var estadoRota = router.route('/estados/:estado_id')
  .get(estadoController.getEstado) //GET estado especifico
  .delete(estadoController.deletEstado); //DELETE

//UPDATE
//atualizar populacao
//nova rota
var estadoRotaPop = router.route('/estados/:estado_id/pop')
  .put(estadoController.putEstadoPop);
//atualizar pib
//nova rota
var estadoRotaPib = router.route('/estados/:estado_id/pib')
  .put(estadoController.putEstadoPib);






// Register all our routes with /api
app.use('/api', router);

//-----------------------------------------------------------------------APLICACAO----------------------------------------------------------------------





// Start the server
app.listen(port);
console.log('escutando na porta ' + port);