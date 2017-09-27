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

/*  Esses : antes de subredditName diz ao express que o que vem a seguir é uma variável.
    Se eu digitar /r/qualquerCoisa/comments/qualquerCoisa, a mensagem "welcome" será exibida.
*/
app.get("/r/:subredditName/comments/:id", function(req, res){
  res.send("welcome");
});

/*  Se eu quiser acessar a variável escolhida em subredditName para apresentar uma mensagem personalizada,
    express gives a way to do that: the req object contains all the information about the incoming request
*/
app.get("/r/:subredditName/", function(req, res){
  console.log(req); //Contém TUDO que vem do req quando você vai para /r/qualquerCoisa
  /* dentro de req vai existir params, que é um objeto que contém todos os paramentros da rota
     então se eu der um console log em req.params o resultado será  { subredditName: 'cu' }*/
  console.log(req.params);
  /*  Se eu quiser usar uma mensagem personalizada, podemos usar o req.params pra puxar o valor de subredditName e jogar numa variável */
  var subreddit = req.params.subredditName;
  res.send("welcome to " +subreddit);
});

/*  O path "*" é usado pra erro 404.
    Ele vai ser ativado sempre que o usuário for para uma página cujo path não foi definido
    ORDEM É IMPORTANTE! Esse route PRECISA ser a última rota!
*/
app.get("*", function(req, res){
  res.send("teste");
});

/*  In express we have to write the code to tell it to listen for different requests.
    To do that, express gives us a method called "listen", then we need to provide the port to listen on.
*/
app.listen(3000, function(){
  console.log("server started");
});
