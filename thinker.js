$(document).ready(function() {
  console.log("ready!");

  var setLyrics = [];

  function Set(lyrics, timing) {
    this.lyricsSplit = lyrics.split("");
    this.lyricsJoin = lyrics;
    this.time = timing;
    setLyrics.push(this);
  }
  var set1 = new Set("I\'ll take every single piece of the blame if you want me to;o", 1000);
  var set2 = new Set("lyrics set 2", 200);
  var set3 = new Set("lyrics set 3", 3000);
  var set4 = new Set("lyrics set 4", 500);
  var set5 = new Set("lyrics set 5", 2000);
  var set6 = new Set("lyrics set 6", 4000);
  var set7 = new Set("lyrics set 7", 1000);
  var set8 = new Set("lyrics set 8", 2000);

  var counter = 0;
  var nextLyric = function () {
    if (counter < setLyrics.length) {
      $("#lyricInput").text(setLyrics[counter].lyricsJoin);
      console.log(setLyrics[counter].lyricsJoin + " " + setLyrics[counter].time);
      setTimeout(nextLyric,setLyrics[counter].time);
      counter++;
    } else if (counter === setLyrics.length){
      console.log("nextLyric ended");
      counter = 0;
    }
  };
  nextLyric();

});
