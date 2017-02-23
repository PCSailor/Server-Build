console.log('Testing app.js to be initially sourced as a mock server');
var express = require('express');
var app = express();
// TODO:  console.log(app);
// NOTE:  Example of what 'var express = require('express');' AND 'var app = express();' is doing:
// var taco = function() {
// return {name: 'Phil'}
// }
// var exampleExpress = taco;
// var exampleApp = taco();
// console.log('exampleExpress: ', exampleExpress); // results: exampleExpress:  function () { return {name: 'Phil'} }
// console.log('exampleApp: ', exampleApp); // results: exampleApp:  { name: 'Phil' }
// Express is a function that will return a big object
// NOTE: END Example of what 'var express = require('express');' AND 'var app = express();' is doing:

var musicList = [
  {name: 'Pink Floyd'},
  {name: 'Grateful Dead'}
]

app.use(express.static('server/public'));
app.get('/music', function(req, res){
console.log('app.get(/music, function is logged: ', req);
res.send(musicList);
});// NOTE: FOR: app.get('/music', function(req, res){


app.listen(5000);
