'use strict';

const toggleClass = (el, className) => {
  if(el.classList)
    return el.classList.toggle(className);

  let classes       = el.className.split(' ');
  let existingIndex = classes.indexOf(className);

  if(existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
};

module.exports = toggleClass;
