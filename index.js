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
    swapi.get(person.homeworld).then(function(homeworld){
      res.send(person.name + " was from " + homeworld.name+". This "+person.gender+" was "
      + person.height + "cm tall and "+person.mass+ "kg. Eye-color was " +person.eye_color+
    " with " +person.skin_color + " skin. Birth year was " + person.birth_year+". ");

    })

  })
  //res.send("hello, world.");
});


var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
