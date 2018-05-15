//controllers
var Estado= require('../models/estado');

//POST
exports.postEstados = function(req, res){
  //cria uma nova instancia de estado
  var estado = new Estado();

  //seta os valores da instancia
  estado.nome = req.body.nome;
  estado.populacao = req.body.populacao;
  estado.pib = req.body.pib;

  //salva e ve erros
  estado.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.json({message: 'estado adicionado!', data:estado});
    }   
  });
};

//GET
//todos
exports.getEstados = function(req,res){
  Estado.find(function(err, estados){
    if(err){
      res.send(err);
    }
    else{
      res.json(estados);
    }
  });
};
//especifico
exports.getEstado = function(req, res){
  Estado.findById(req.params.estado_id, function(err, estado){
    if(err){
      res.send(err);
    }
    else{
      res.json(estado);
    }
  });
};

//PUT
//populacao
exports.putEstadoPop = function(req,res){
  Estado.findById(req.params.estado_id, function(err, estado){
    if(err){
      res.send(err);
    }
    else{
      estado.populacao = req.body.populacao;
      estado.save(function(err){
        if(err){
          res.send(err);
        }
        else{
          res.json(estado);
        }
      });
    }
  });
};
//pib
exports.putEstadoPib = function(req,res){
  Estado.findById(req.params.estado_id, function(err, estado){
    if(err){
      res.send(err);
    }
    else{
      estado.pib = req.body.pib;
      estado.save(function(err){
        if(err){
          res.send(err);
        }
        else{
          res.json(estado);
        }
      });
    }
  });
};

//DELETE
exports.deletEstado = function(req, res){
  Estado.findByIdAndRemove(req.params.estado_id, function(err){
    if(err){
      res.send(err);
    }
    else{
      res.json({message:'estado removido com sucesso!'})
    }
  });
};


