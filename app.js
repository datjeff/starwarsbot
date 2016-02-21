var express = require("express");
var swapi = require("swapi-node");

var app = express();
app.set('port', (process.env.PORT || 5000));
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


var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
