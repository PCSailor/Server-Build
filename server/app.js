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
app.use(express.static('server/public'));
app.listen(5000);
