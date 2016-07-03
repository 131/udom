"use strict";

var n = require('../element/create');

module.exports = function(filename, dataUrl) {

  var link = n("a", {
      download : filename,
      target : "_blank",
      href : dataUrl});

  document.body.appendChild(link);
  link.click();

  // Cleanup the DOM
  document.body.removeChild(link);
};
