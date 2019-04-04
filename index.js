const stream = require('youtube-audio-stream');
const decoder = require('lame').Decoder;
const speaker = require('speaker');

const args = process.argv.slice(2);
//console.log(args);

const url = args[0];

stream(url)
  .pipe(decoder())
  .pipe(new speaker());
