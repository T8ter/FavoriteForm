$(document).ready(function(){
  $("form#favorite").submit(function(event) {

  var hobby = $("#hobby").val();
  var food = $("#food").val();
  var color = $("#color").val();
  var vacation = $("#vacation").val();
  var movie = $("#movie").val();

var favs = [hobby, food, color, vacation, movie]
console.log(favs.toString());
 event.preventDefault();
  });
});
