$(document).ready(function() {
  console.log("ready!");

  var setLyrics = [];

  function Set(lyrics, timing) {
    this.lyricsSplit = lyrics.split("");
    this.lyricsJoin = lyrics;
    this.time = timing;
    setLyrics.push(this);
  }
  var set1 = new Set("When you were here before", 500);
  var set2 = new Set("Couldn't look you in the eye", 500);
  var set3 = new Set("You're just like an angel", 500);
  var set4 = new Set("Your skin makes me cry", 500);
  var set5 = new Set("You float like a feather", 500);
  var set6 = new Set("In a beautiful world", 500);
  var set7 = new Set("I wish I was special", 500);
  var set8 = new Set("You're so very special", 500);

  var counter = 0;
  var nextLine = function () {
    if (counter < setLyrics.length) {
      $("#lyricsText").text(setLyrics[counter].lyricsJoin);
      console.log(setLyrics[counter].lyricsJoin + " " + setLyrics[counter].time);
      setTimeout(nextLine,setLyrics[counter].time);
      counter++;
    } else if (counter === setLyrics.length){
      console.log("nextLine ended");
      counter = 0;
    }
  };

  $("#lyricsSection").append("<div id='start'>Press Enter to start!</div>");

var enterStart = function(enter) {
  if (enter.which === 13) {
    console.log("clicked");
    var counter = 5;
    var interval = setInterval(function() {
      counter--;
      if (counter >= 0) {
        $("#start").unbind(enter); //disables enter button!
        $("#start").remove();
        $("#lyricsText").text(counter);
        console.log(counter);
      }
      if (counter === 0) {
        console.log("end");
        clearInterval(counter);
      }
    }, 1000);
  }
  setTimeout(nextLine,5000);
};
$(document).on('keydown', enterStart);


//var startTime = 3
/* function countdownTimer() {
  startTime --
  displayedCountDown.html(startTime)
}
*/

  // // attach key listener to the document!
  // var letterPressed = $(document).keyup(function(objEvent) {
  //   (objEvent) ? keycode = objEvent.keyCode : keycode = event.keyCode;
  //   console.log(keycode);
  //   letter = String.fromCharCode(keycode);
  //   console.log(letter);//this gets the letter printed instead of the number
  // });


});
