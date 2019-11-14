var express = require('express');
var router = express.Router();
express.static('public')
/* GET home page. */
var midi = require('../public/javascripts/MIDI');
//console.log(midi.Player);

router.get('/', function(req, res, next) {
  res.render('../views/music.ejs', {Player: midi});
})

module.exports = router;
