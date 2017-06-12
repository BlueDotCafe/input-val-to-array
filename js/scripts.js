$(document).ready(function() {
  $("#array").hide();
  $("#input-form").submit(function() {
    event.preventDefault();


        var favs = [
          $("#fav1").val(),
          $("#fav2").val(),
          $("#fav3").val(),
          $("#fav4").val(),
          $("#fav5").val()
        ];

        $("input").keyup(function() {
          var value = $( this ).val();
          $( "p" ).text( value );
          })
          .keyup();


          var currentAnswer = answers[i];
          console.log(currentAnswer);
          tally[currentAnswer]++;
        }

  });
});

https://stackoverflow.com/questions/10523200/storing-user-input-in-array

/*VERSION 1--
var favoriteThings = ["1", "2", "3", "4", "5"];

favoriteThings.forEach( function( blank) {
  var userInput = $("input" + favoriteThings).val();
  $("." + blank).text(userInput);
});

$("#array").show();
--END OF VERSION 1*/

/*VERSION 2--
var fav1 = document.getElementById("fav1").value;
var fav2  = document.getElementById("fav2").value;
var fav3 = document.getElementById("fav3").value;
var fav4 = document.getElementById("fav4").value;
var fav5  = document.getElementById("fav5").value;

var favoriteThings = [fav1, fav2, fav3, fav4, fav5];
--END OF VERSION 2*/
