/*  sempre que instalar alguma coisa via npm é preciso dar require no app.js! */
var express = require("express");

/*  inclui todo o conteudo do express dentro da variável "app"
    então podemos usar todos os métodos de express usando a app.[metodo] */
var app = express();

/*  routes: cria 3 rotas, a primeira é quando você vai ára "/" => "Hi there!"
    app.get leva 2 parametros: o url (ou path) e o segundo é uma função que é o que vai sempre executar quando chegar no path.
    Essa função leva 2 argumentos: req e res que pode ser nomeado qualquer coisa, mas o padrão é esse.
    req e res are actually objects, inside of this function req is an object that contains all the information about the request
    that was made that trigger this route and response will contain all the information about what we're going to respond with
*/
app.get("/", function(req, res){
  res.send("Hi there");
});

// other route "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("goodbye!!");
});

/*  In express we have to write the code to tell it to listen for different requests.
    To do that, express gives us a method called "listen", then we need to provide the port to listen on.
*/
app.listen(3000, function(){
  console.log("server started");
});
