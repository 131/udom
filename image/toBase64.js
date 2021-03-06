"use strict";

module.exports = function(url /*[, type]*/, callback) {
  var args     = [].slice.apply(arguments);
  callback     = args.pop();
  url          = args.shift();
  var type     = args.shift() || 'image/png';

  var img = new Image();
  var canvas;
  var ctx;
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width  = img.width;

    ctx.drawImage(img, 0, 0);
    callback(null, canvas.toDataURL(type));
    canvas = null;
  };
  img.src = url;
};
