$(document).ready(function(){
  $("form#favorite").submit(function(event) {

  var hobby = $("#hobby").val();
  var food = $("#food").val();
  var color = $("#color").val();
  var vacation = $("#vacation").val();
  var movie = $("#movie").val();

var favs = [hobby, food, color, vacation, movie]
console.log(favs.toString());

var fav0 = favs[0];
var fav1 = favs[1];
var fav2 = favs[2];
console.log(fav0.toString());
console.log(fav1.toString());
console.log(fav2.toString());


var newFavs = [];
newFavs.push(fav0,fav1,fav2);
console.log(newFavs.toString());

 event.preventDefault();
  });
});
