$(document).ready(function() {
  $("#array").hide();
  $("#input-form").submit(function() {
    event.preventDefault();

      var first = $("#fav1").val();
      var second = $("#fav2").val();
      var third = $("#fav3").val();
      var fourth = $("#fav4").val();
      var fifth = $("#fav5").val();

      var favs = [first, second, third, fourth, fifth];

      $(".fav1").text(favs[0]);
      $(".fav2").text(favs[1]);
      $(".fav3").text(favs[2]);
      $(".fav4").text(favs[3]);
      $(".fav5").text(favs[4]);

      $("#array").show();
    });
});


//      $(getElementsByClassName('fav5').text(favs[4]))


        // var favs = [
        //   $("#fav1").val(),
        //   $("#fav2").val(),
        //   $("#fav3").val(),
        //   $("#fav4").val(),
        //   $("#fav5").val()
        // ];
        //
        //
        //
        // $("input").keyup(function() {
        //   var value = $( this ).val();
        //   $( "p" ).text( value );
        //   })
        //   .keyup();
        //
        // })

// https://stackoverflow.com/questions/10523200/storing-user-input-in-array

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
