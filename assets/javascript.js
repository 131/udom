"use strict";

const create = require('../element/create');

module.exports = function(source, chain) {
  console.log("Should load", source);

  var load = chain || Function.prototype;

  var script = create('script', {src : source, type : 'text/javascript'});
  console.log(script);

  script.addEventListener('load', load, false);
  document.head.appendChild(script);

};
