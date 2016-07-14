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
  var set1 = new Set("When you were here before", 500).addToArray();
  var set2 = new Set("Couldn't look you in the eye", 500).addToArray();
  var set3 = new Set("You're just like an angel", 500).addToArray();
  var set4 = new Set("Your skin makes me cry", 500).addToArray();
  var set5 = new Set("You float like a feather", 500).addToArray();
  var set6 = new Set("In a beautiful world", 500).addToArray();
  var set7 = new Set("I wish I was special", 500).addToArray();
  var set8 = new Set("You're so very special", 500).addToArray();

  var counter = 0;
  var nextLine = function () {
    if (counter < setLyrics.length) {
      $("#lyricsText").text(setLyrics[counter].lyricsJoin); //change display lyrics
      console.log(setLyrics[counter].lyricsJoin + " " + setLyrics[counter].time);

      setTimeout(nextLine,setLyrics[counter].time);
      //timesout and calls the next line according to the allocated time by calling itself
      counter++;
    } else if (counter === setLyrics.length){
      console.log("nextLine ended");
      counter = 0;
    }
  };

  $("#lyricsSection").append("<p id='start'>Press Enter to start!</p>");

  var enterStart = function(enter) {
    if (enter.which === 13) { //when enter is clicked
      console.log("clicked!");
      $("#start").unbind(enter); //disables enter button!
      $("#start").remove(); // removes the p id="start"

      var counter = 6;
      var interval = setInterval(function() {
        //setInterval calls for the function at every sepcified intervals
        //counter is set to 6, calls every 1second and countsdown!
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
    }
    else { }
  };
  // $(document).keydown(enter.which === 13);
  $(document).on('keydown', enterStart);
  // enterStart();

  // attach key listener to the document!
  var nextLetter = 0;
  var nextSentence = 0;
  var letterPressed = '';

  var pressedKey =
  $(document).keypress(function(objEvent) {
    (objEvent) ? keycode = objEvent.keyCode: keycode = event.keyCode;
    letter = String.fromCharCode(keycode); //this gets the letter printed instead of the number
    console.log(letter);

    if (letter === setLyrics[nextSentence].lyricsSplit[nextLetter]){
      console.log("got it right");
      nextLetter++; //move to next letter
      console.log(nextLetter);

      letterPressed += '' + letter;// concatenate letters
      $("#userText").text(letterPressed); // change display text

      if(nextLetter === setLyrics[nextSentence].lyricsSplit.length){
        nextSentence++;
        console.log(nextSentence);
        letterPressed = ""; //clears screen
        nextLetter = 0;
        return nextSentence;
      }

      return nextLetter;
    }
    else {}
    console.log(nextLetter);

});

  // var nextLetter = 0;
  // function checkLetter(){
  // if(setLyrics[0].lyricsSplit[nextLetter] == letter)
  //   {
  //     console.log(nextLetter);
  //     nextLetter ++;
  //     console.log(nextLetter);
  //   }
  // }
  // checkLetter();


  //PROBLEM: if player presses other letters before pressing enter, it will run!

});
