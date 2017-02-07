"use strict";

var forEach = require('mout/array/forEach');

module.exports = function(dom) {
  var queryString = {}, value;

  forEach(dom.querySelectorAll("input"), function(el) {

    var type = el.type,
        date_mode = (el.type == 'date' || el['value-type'] == 'date');

    if (!el.name || el.disabled || type == 'submit' || type == 'reset' || type == 'file' || type == 'image')
      return;

    value = el.value;
    if(date_mode && value) value = Date.parse(value).format('%s');
    if(date_mode && !value) value = null;
    queryString[el.name] = value;

  });
  return queryString;
};

