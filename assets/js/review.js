window.addEventListener('load', changeReview, false);
function changeReview() {
  var reviewText = [];
  reviewText.push("Storetasker delivered on time, within budget and went above and beyond to make my app a sucess...", "Working with Billy (Storetasker expert) was easy and fast. He understood my needs quickly and was very helpful by explaining me everything I needed to.", "Excellent work and exactly what I needed. Satish is truly a competent professional. Very prompt, and thorough, with in-depth expertise. Outstanding! Thank you.", "Very helpful, timely & friendly service, with successful completion of the required tasks. I will definitely consider Rebecca for future projects.");
  var reviewName = [];
  reviewName.push("Natalie Hernandez", "Charlotte", "Nick", "Michele");
  var reviewRole = [];
  reviewRole.push("CEO @ Stocksy", "La Maison Orphée", "Zen Den Candles", "Botanical Home");
  var i = 0;

  $('#buttonFoward').click(function() {
    i++;
    if(i >= 3) {
      i=3;
    }
    $("#reviewer_photo").replaceWith(
      "<img id='reviewer_photo' src='assets/img/review"+i+".png' alt='Reviewer Photo'>"
    );

    $("#review_text").replaceWith(
      "<p id='review_text'>"+reviewText[i]+"</p>"
    );

    $("#name").replaceWith(
      "<p id='name'>"+reviewName[i]+"</p>"
    );

    $("#role").replaceWith(
      "<h5 id='role'>"+reviewRole[i]+"</h5>"
    );
  });

  $('#buttonBack').click(function() {
    i--;
    if(i <= 0) {
      i=0;
    }
    console.log(i);
    $("#reviewer_photo").replaceWith(
      "<img id='reviewer_photo' src='assets/img/review"+i+".png' alt='Reviewer Photo'>"
    );

    $("#review_text").replaceWith(
      "<p id='review_text'>"+reviewText[i]+"</p>"
    );

    $("#name").replaceWith(
      "<p id='name'>"+reviewName[i]+"</p>"
    );

    $("#role").replaceWith(
      "<h5 id='role'>"+reviewRole[i]+"</h5>"
    );
  });

  $('main').click(function() {
    if(i == 0) {
      $("#buttonBack").css("background-color", "var(--color-grey)");
      $("#buttonBack").removeClass('hover');
      $("#buttonBack").css( 'cursor', 'default' );
    } else {
      $("#buttonBack").css("background-color", "var(--color-lightblue)");
      $("#buttonBack").addClass('hover');
      $("#buttonBack").css( 'cursor', 'pointer' );
    }

    if(i >= 3){
      $("#buttonFoward").css("background-color", "var(--color-grey)");
      $("#buttonFoward").removeClass('hover');
      $("#buttonFoward").css( 'cursor', 'default' );
    } else {
      $("#buttonFoward").css("background-color", "var(--color-lightblue)");
      $("#buttonFoward").addClass('hover');
      $("#buttonFoward").css( 'cursor', 'pointer' );
    }
  });
}
