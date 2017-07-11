//$(document).ready(function() {
function myFunction1() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("demo").innerHTML = x;
    $("#demo").append("<p>"+x+"</p>");

    //document.getElementById("#player2").innerHTML = x;
}
function myFunction2() {
var y = Math.floor((Math.random() * 10) + 1);
document.getElementById("demo2").innerHTML = y;
}
