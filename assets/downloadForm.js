"use strict";

const guid   = require('mout/random/guid');
const forIn  = require('mout/object/forIn');

const create = require('../element/create');

function encode(v, k) {
  var values = [];
  var t      = typeof v;
  if(v === null)
    return values;
  if(Array.isArray(v)) {
    v.forEach(function(j) {
      values.push.apply(values, encode(j, k + "[]"));
    });
  } else if(t == "object") {
    forIn(v, function(j, kk) {
      values.push.apply(values, encode(j, k ? k + "[" + kk + "]" : kk));
    });
  } else if(t == "number" || t == "string")
    values.push([k, v]);

  return values;
}

module.exports = function(action, args) {
  var iid    = guid();
  var iframe = create('iframe', {
    id    : iid,
    name  : iid,
    style : 'display:none'
  });

  var form = create("form", {
    method : 'POST',
    action : action,
    target : iid
  });

  encode(args).forEach(function(line) {
    form.appendChild(create('input', {
      name  : line[0],
      value : line[1]
    }));
  });

  document.body.appendChild(iframe);
  iframe.contentWindow.document.body.appendChild(form);

  form.submit();
  form.parentNode.removeChild(form);
};
