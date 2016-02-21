var express = require("express");
var swapi = require("swapi-node");
var Bot = require("botkit");
var fs = require("fs");

var token = process.env.BOT_TOKEN;

var controller = Bot.slackbot({
  debug:false
});

controller.spawn({
  token: token
}).startRTM();

controller.hears('facts',['direct_message', 'direct_mention','mention'],function(bot,message){
  getRandomStarWarsFact(function(fact){
    bot.reply(message, fact);
  });
});

function getRandomStarWarsFact(callback){
  var num = Math.floor((Math.random() * 10) + 1);
  swapi.getPerson(num).then(function(person){
    swapi.get(person.homeworld).then(function(homeworld){
      callback(person.name + " was from " + homeworld.name+". This "+person.gender+" was "
      + person.height + "cm tall and "+person.mass+ "kg. Eye-color was " +person.eye_color+
      " with " +person.skin_color + " skin. Birth year was " + person.birth_year+". ");

    });
  });
}

var app = express();
app.set('port', (process.env.PORT || 5000));
app.get('/', function(req, res){
  res.send('StarWarsBot is up and running');
});

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
