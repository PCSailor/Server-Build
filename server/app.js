console.log('Testing app.js to be initially sourced as a mock server');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})); // this creates re.body (further below)
// TODO:  console.log(app);
// NOTE:  Example of what 'var express = require('express');' AND 'var app = express();' are doing:
// var taco = function() {
// return {name: 'Phil'}
// }
// var exampleExpress = taco;
// var exampleApp = taco();
// console.log('exampleExpress: ', exampleExpress); // results: exampleExpress:  function () { return {name: 'Phil'} }
// console.log('exampleApp: ', exampleApp); // results: exampleApp:  { name: 'Phil' }
// Express is a function that will return a big object
// NOTE: END Example of what 'var express = require('express');' AND 'var app = express();' are doing:
var musicList = [
  {name: 'Pink Floyd'},
  {name: 'Grateful Dead'}
]
app.get('/music', function(req, res){
res.send(musicList); // NOTE: feeds client.js/forloop/response[i]/forloop
// console.log('app.get/music, function is logged: ', req);
});
// NOTE: firstBand
app.get('/music/firstBand', function(req, res){  // NOTE: calls for a new webpage with browser -only generated result
res.send(musicList[0].name); // NOTE: Results with {"name":"Pink Floyd"} in the browser
// QUESTION: Why do I need [.name] to get Pink Floyd instead of object, Object printed on the DOM?
console.log(musicList[0]);  // NOTE: Results with {"name":"Pink Floyd"} in the terminal
});
// QUESTION: THIS IS NOT WORKING
// NOTE: lastBand
// app.get('/music/lastBand', function(req, res){  // NOTE:
//   var lastIndex = musicList.length-1; //musicList[1];
//   res.send(lastIndex); // NOTE:
// });
// NOTE: THIS WORKS
// NOTE: lastBands Name
app.get('/music/lastName', function(req, res){  // NOTE:
res.send(musicList[1].name); // NOTE: results with Grateful Dead
});
// QUESTION: THIS IS NOT WORKING
// // NOTE: firstBands Name
// app.get('/music/firstName', function(req, res){  // NOTE:
//   var firstIndex = musicList[length - 1];
// res.send(firstIndex.name); // NOTE:
// });

// NOTE: User Data Input adding to database array
app.post('/music/newBands', function(req, res){
var newBands = req.body; // NOTE: **In order to use req.body, you need body-parser**
musicList.push(newBands); // TODO: Is this correct?
console.log('New Band Push: ', musicList);
res.sendStatus(200);
})





app.listen(5000);
