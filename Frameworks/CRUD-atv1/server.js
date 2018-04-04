const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyparsa = require('body-parser')
const app = express();


//sync mondoDB
var db

MongoClient.connect('mongodb://atv1:atv1db@ds231749.mlab.com:31749/fws-a1', (err, client) => {
	if (err) return console.log(err)
  		db = client.db('fws-a1')
		app.listen(3000, () => {
		console.log('listening on 3000')
		})
})

//extraxt data from forms
app.use(bodyparsa.urlencoded({extended: true}))

//ejs
app.set('view engine', 'ejs')
//main
app.use(express.static('public'))
app.use(bodyparsa.json())

//READ
app.get('/', (request, response) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    response.render('index.ejs', {quotes: result})
  })
})

//CREATE
app.post('/quotes' ,(request, response)=>{
	db.collection('quotes').save(request.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    response.redirect('/')
  })
})

//UPDATE
app.put('/quotes', (request, response) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'gabriel'}, {
    $set: {
      name: request.body.name,
      quote: request.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return response.send(err)
    response.send(result)
  })
})

//DELETE
app.delete('/quotes', (request, response) => {
  // Delete Handling
  db.collection('quotes').findOneAndDelete(
  	{name: request.body.name},
  (err, result) => {
    if (err) return response.send(500, err)
    response.send({message: 'citacao deletada!'})
  })
})