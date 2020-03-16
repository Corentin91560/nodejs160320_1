
const express = require('express')
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
const fs = require('fs');

app.get('/', function (req, res) {

      res.send('Hello World');

})

app.get('/hello', function (req, res) {

    if (req.query.nom) {
      res.send('Bonjour, '+req.body.nom+' !');
    }else {
      res.send('Quel est votre nom ?');
    }

})

app.post('/chat', (req, res) => {
  switch(req.body.msg) {
    case "ville":
      res.send("Nous sommes à Paris\n");
      break;
    case "météo":
      res.send("Il fait beau\n");
      break;
    default:
      res.send("Réponse par défaut\n");
      break;
  }
});

app.listen(3000 || process.env.PORT , function () {
  console.log('Example app listening on port 3000!')
})
