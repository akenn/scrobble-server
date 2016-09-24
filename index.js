var express = require('express');
var app = express();

var PORT = 3001

var songs = [];

app.disable('etag');

app.get('/v1/scrobble', function(req, res) {
  console.log('asdf');
  songs.push({
    artist: req.query.artist,
    track: req.query.track,
  });

  res.send("");
});

app.get('/v1/list', function(req, res) {
  res.json(songs);
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
