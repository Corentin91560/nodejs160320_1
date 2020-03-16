
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
  var message = req.body.msg
  switch(message) {
    case "ville":
      res.send("Nous sommes à Paris\n");
      break;
    case "météo":
      res.send("Il fait beau\n");
      break;
    case "demain":
      let rawdata = fs.readFileSync('response.json');
      let json = JSON.parse(rawdata);
      console.log(json.day);
      if(json.day == null) {
        res.send("Je ne connais pas demain…\n");
      }
      else {
        res.send(json.day);
      }
      break;
    case (message.match(/^demain = /) || {}).input:
      let day = {
          day: message.substring(9),
      };
      let data = JSON.stringify(day);
      fs.writeFileSync('response.json', data);
      res.send(message.substring(9));
      break;
    default:
      res.send("Réponse par défaut\n");
      break;
  }
});

app.listen(process.env.PORT || 3000 , function () {
  console.log('Example app listening on port 3000!')
})
