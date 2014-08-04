node-mediafragment
==================

Node version of Thomas Steiner's [MediaFragment.js](http://tomayac.com/mediafragments/mediafragments.html) ([Github](https://github.com/tomayac/Media-Fragments-URI)).

Media Fragments URI is a W3C specification with the objective to provide for
media-format independent, standard means of addressing media fragments on the
Web using Uniform Resource Identifiers (URIs).
(http://www.w3.org/2008/WebVideo/Fragments/)


## Installation

  This library is not yet on npm.
  
  You can install it from git source with:
  <pre>npm install git+https://github.com/pasqLisena/node-mediafragment</pre>

## Usage

<pre>
  var mfParse = require('mediafragment');

  var json = mfParse.parse('www.example.com/video.mp4?t=10,20');
  console.log(JSON.stringify(json));
  // {"query":{"t":[{"value":"10,20","unit":"npt","start":"10","end":"20","startNormalized":10,"endNormalized":20}]},"hash":{}}
</pre>

Warning logs are disabled by default. In order to activate them, use
<pre>
 mfParse.setVerbose(true);
</pre>

## Tests

<pre>npm test</pre>

