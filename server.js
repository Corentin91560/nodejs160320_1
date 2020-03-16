
const express = require('express')
const app = express()

app.get('/hello', function (req, res) {

    if (req.query.nom) {
      res.send('Bonjour,'+req.query.nom);
    }else {
      res.send('Quel est votre nom ?');
    }

})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
