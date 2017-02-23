console.log('Javascript Sourced');
$(document).ready(function() {
console.log('jQuery sourced');
// NOTE:  Building dynamic file structure using Ajax
$.ajax({
type: 'GET',
url: '/music',
success: function(response) {
console.log('success-function response: ', response); // logs the array of objects
for (var i = 0; i < response.length; i++) {
$('#musicContainer').append('<li>' + response[i].name + '<li>')
}
} // NOTE: FOR: success: function(response) {
}); // NOTE: FOR: $.ajax({


}); // NOTE: FOR:           $(document).ready(function() {
