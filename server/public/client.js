console.log('Javascript Sourced');
$(document).ready(function() {
console.log('jQuery sourced');
// NOTE:  Building dynamic file structure using Ajax
////////////////// NOTE: 1st Ajax Request: //////////////////
$.ajax({
type: 'GET',
url: '/music',
success: function(response) { // response from app.js/app.get-function/res.send
  // QUESTION: What happens when there's multiple app.js/app.get-function/res.send's?
console.log('success-function response: ', response); // logs the array of objects
for (var i = 0; i < response.length; i++) {
$('#musicContainer').append('<li>' + response[i].name + '<li>')
}
} // NOTE: FOR: success: function(response) {
}); // NOTE: FOR: $.ajax({
////////////////// NOTE: 2nd Ajax Request: //////////////////
$.ajax({
type: 'GET',
url: '/music/firstBand',
success: function(response) { // response from app.js/app.get-function/res.send
  // QUESTION: What happens when there's multiple app.js/app.get-function/res.send's?
console.log('success-function response: ', response); // logs res.send(musicList[0])
$('#firstBandsAwesome').text(response);
} // NOTE: FOR: success: function(response) {
}); // NOTE: FOR: $.ajax({


// NOTE: User Data Input adding to database array
$('#newBandButton').on('click', function() {
  var newBandObject = {};
  newBandObject.name = $('#newBandName').val();
$.ajax({
    type: 'POST',
    url: '/music/newBands',
    data: newBandObject,
    success: function(response){
    console.log('New Bands Ajax Post Response: ', response);
  } // NOTE: FOR:  success: function(response){
  }); // NOTE: FOR: $.ajax({
}); // NOTE: FOR: $('#newBandButton').on('click', function() {




}); // NOTE: FOR:           $(document).ready(function() {
