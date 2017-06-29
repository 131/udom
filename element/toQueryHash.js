"use strict";

const forEach = require('mout/array/forEach');

module.exports = function(dom) {
  var queryString = {};
  var value;

  forEach(dom.querySelectorAll('input, select, textarea'), function(el) {
    var type = el.type;
    var date_mode = (el.type == 'date' || el['value-type'] == 'date');

    if (!el.name || el.disabled || type == 'submit' || type == 'reset' || type == 'file' || type == 'image') {
      return;
    }

    value = el.value;
    if (date_mode && value) {
      value = Date.parse(value).format('%s');
    }
    if (date_mode && !value) {
      value = null;
    }

    if (type == 'radio' && el.checked) {
      queryString[el.name] = value;
    } else if (type == 'checkbox' && el.checked) {
      if (!queryString[el.name]) {
        queryString[el.name] = value;
      } else {
        if (typeof queryString[el.name] == 'string') {
          let temp = queryString[el.name];
          queryString[el.name] = [];
          queryString[el.name].push(temp);
        }
        queryString[el.name].push(value);
      }
    } else if (type != 'radio' && type != 'checkbox') {
      queryString[el.name] = value;
    }
  });
  return queryString;
};

