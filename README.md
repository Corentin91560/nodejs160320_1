# Installation du Projet

Initialisation du projet :

`$ git clone https://github.com/Corentin91560/nodejs160320_2.git `

installation des dependances :

`$ npm install`

demarrage du serveur :

`$ npm start`

pouvoir tester (disponible sur heroku):

Ex1

`$ curl http://localhost:3000/`
`$ curl https://nodejs160320-2.herokuapp.com/`->Hello World ! 

Ex3

`$ curl http://localhost:3000/hello?nom=Sasha` -> Bonjour, Sasha !
`$ curl https://nodejs160320-2.herokuapp.com/hello?nom=Sasha`

`$ curl http://localhost:3000/hello?nom=Michel` -> Bonjour, Michel !
`$ curl https://nodejs160320-2.herokuapp.com/hello?nom=Michel`

`$ curl http://localhost:3000/hello` -> Quel est votre nom ?
`$ curl https://nodejs160320-2.herokuapp.com/hello`

Ex4

`$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat` -> Nous sommes à Paris

`$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat` -> Il fait beau 

Ex5

`$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" http://localhost:3000/chat` -> Je ne connais pas demain…

`$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain = Mercredi\"}" http://localhost:3000/chat` -> Merci pour cette information !

`$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" http://localhost:3000/chat` -> demain: Mercredi (meme apres un redemarrage du serveur !)



