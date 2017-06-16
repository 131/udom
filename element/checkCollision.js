"use strict";

module.exports = function(a, b){
  var getPositions = function(elem) {
    var pos = elem.getClientRects()[0];
    return [[pos.left, pos.left + pos.width], [pos.top, pos.top + pos.height]];
  };

  var comparePositions = function(p1, p2) {
    var r1 = p1[0] < p2[0] ? p1 : p2;
    var r2 = p1[0] < p2[0] ? p2 : p1;
    return r1[1] > r2[0] || r1[0] === r2[0];
  }

  var pos1 = getPositions(a);
  var pos2 = getPositions(b);
  return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
};
