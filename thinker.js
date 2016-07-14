$(document).ready(function() {
  console.log("ready!");

  var setLyrics = [];

  function Set(lyrics, timing) {
    this.lyricsSplit = lyrics.split("");
    this.lyricsJoin = [lyrics];
    this.time = timing;
    this.addToArray = function () {
      setLyrics.push(this);
    };
  }
  var set1 = new Set("when you were here before", 4000).addToArray();
  var set2 = new Set("couldnt look you in the eye", 4000).addToArray();
  var set3 = new Set("youre just like an angel", 4000).addToArray();
  var set4 = new Set("your skin makes me cry", 4000).addToArray();
  var set5 = new Set("you float like a feather", 4000).addToArray();
  var set6 = new Set("in a beautiful world", 4000).addToArray();
  var set7 = new Set("i wish i was special", 4200).addToArray();
  var set8 = new Set("youre so very special", 4200).addToArray();
  var set9 = new Set("but im a creeeeeeeeeeeepe", 8000).addToArray();
  var set10 = new Set("im a weird doughhhhhh", 8000).addToArray();
  var set11 = new Set("what the hell am i doing here", 8000).addToArray();
  var set12 = new Set("i dont belong here", 7000).addToArray();

  // initialize gameLineCount- change to next line
  var gameLineCount = 0;
  var nextLine = function () {
    if (gameLineCount < setLyrics.length) {
      $("#lyricsText").text(setLyrics[gameLineCount].lyricsJoin); //change display lyrics
      console.log(setLyrics[gameLineCount].lyricsJoin + " " + setLyrics[gameLineCount].time);

      setTimeout(nextLine,setLyrics[gameLineCount].time);
      //timesout and calls the next line according to the allocated time by calling itself
      gameLineCount++;
    } else if (gameLineCount === setLyrics.length){
      console.log("nextLine ended");
      gameLineCount = 0;
      $("#lyricsText").html("<h1>"+playerScore+"</h1>");
    }
  };

  // Activate enter key to start the game

  $("#lyricsSection").append("<p id='start'>Press Enter to start!</p>");
  var enterStart = function(enter) {
    if (enter.which === 13) { //when enter is clicked
      console.log("clicked!");
      $("#start").unbind(enter); //disables enter button!
      $("#start").remove(); // removes the p id="start"

      var audio = new Audio('sounds/Creep.mp3');
      //counter is set to 6, calls every 1second and countsdown!
      //setInterval calls for the function at every sepcified intervals
      var counter = 6;
      var interval = setInterval(function() {
        counter--;
        if (counter >= 0) {
          $("#lyricsText").text(counter); //prints countdown
          console.log(counter);
        }
        else if (counter === 0) {
          console.log("end");
          clearInterval(counter);
          console.log("counter number is "+counter);
        }
      }, 1000);
      setTimeout(nextLine,6000);
      setTimeout(function() {
        audio.play(); // play it through JavaScript after 3 seconds
      }, 5000);
    }
    else { }
  };
  $(document).on('keydown', enterStart);

  // Display user input and compare against lyricsSplit[letterCount]
  // count player score
  var letterCount = 0;
  var playerLineCount = 0;
  var letterPressed = '';
  var playerScore = '';


  var pressedKey =
  $(document).keypress(function(objEvent) {
    (objEvent) ? keycode = objEvent.keyCode: keycode = event.keyCode;
    letter = String.fromCharCode(keycode); //this gets the letter printed instead of the number
    console.log(letter + " is pressed.");

    if (letter === setLyrics[playerLineCount].lyricsSplit[letterCount]){
      console.log("got it right");

      letterCount++; //move to next letter
      console.log("moving on to letter " + letterCount);

      // $("#lyricsText").attr("color","blue");
      letterPressed += '' + letter;// concatenate letters
      $("#userText").text(letterPressed); // change display text

      playerScore++;
      $("#p1Score").text(playerScore);
      console.log("player's score is now: "+ playerScore);
      return playerScore, letterCount;
    }

    if (keycode == 13){
      if(letterCount >= setLyrics[playerLineCount].lyricsSplit.length){
      $("#userText").text("");
      playerLineCount++;
      letterPressed = ""; //clears screen
      letterCount = 0;
      }
    }

    console.log("playerLineCount: " + playerLineCount, "gameLineCount:" + gameLineCount);
  });

  //PROBLEM: if player presses other letters before pressing enter, it will run!

});
