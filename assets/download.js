"use strict";

const create = require('../element/create');

module.exports = function(filename, dataUrl) {

  var link = create("a", {
    download : filename,
    target   : "_blank",
    href     : dataUrl
  });

  document.body.appendChild(link);
  link.click();

  // Cleanup the DOM
  document.body.removeChild(link);
};
