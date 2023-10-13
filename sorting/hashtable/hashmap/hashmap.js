'use strict';

function duplicate(str) {
  const newStr = str.replaceAll(',', '').toLowerCase();
  const strArray = newStr.split(' ');
  const map = {};
  
  for(let word of strArray) {
    if (map[word]) return word;
    else map[word] = true;
  };
};