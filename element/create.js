"use strict";

const forIn = require('mout/object/forIn');

module.exports = function(tagname, attrs) {
  var foo = document.createElement(tagname);
  forIn(attrs || {}, function(value, attrname) {
    foo[attrname] = value;
  });

  return foo;
};
