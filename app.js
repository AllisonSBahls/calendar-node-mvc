const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); 
const index = require("./app/routes/event")

const app = express();

//Templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));

//Globais
app.locals.moment = require('moment');

//Arquivos estáticos
app.use(express.static('./app/public'));

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.use('/', index);


//Inicialização do Servidor
app.listen(4000, function(){
	console.log('Servidor ON');
});