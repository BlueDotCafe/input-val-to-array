$(document).ready(function() {
  $("#array").hide();
  $("#input-form").submit(function() {
    event.preventDefault();

    var fav1 = document.getElementById("fav1").value;
    var fav2  = document.getElementById("fav2").value;
    var fav3 = document.getElementById("fav3").value;
    var fav4 = document.getElementById("fav4").value;
    var fav5  = document.getElementById("fav5").value;

    var favoriteThings = [fav1, fav2, fav3, fav4, fav5];

  });
});

https://stackoverflow.com/questions/10523200/storing-user-input-in-array


/*var favoriteThings = ["1", "2", "3", "4", "5"];

favoriteThings.forEach( function( blank) {
  var userInput = $("input" + favoriteThings).val();
  $("." + blank).text(userInput);
});

$("#array").show();*/
