var express = require("express");
var swapi = require("swapi-node");

var app = express();

app.get('/', function(req, res){
  console.log('test');
  var num = Math.floor((Math.random() * 10) + 1);
  swapi.getPerson(num).then(function(person){
    //console.log(result);
    // result.getHomeworld().then(function(world){
    //   //console.log(result);
    //   res.send([person, world])
    // })
    res.send(person);

  })
  //res.send("hello, world.");
});


var server = app.listen(8081, function(){
  console.log("server listening on port 8081");
});
