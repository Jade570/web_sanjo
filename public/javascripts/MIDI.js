
// Load a MIDI file
var MidiPlayer = require('midi-player-js');

var Player = new MidiPlayer.Player(function(event) {
  //  console.log(event);
});

Player.loadFile('/home/jade570/midifiles/sangun/gye/dang_a_1_gye.mid');
Player.play();
