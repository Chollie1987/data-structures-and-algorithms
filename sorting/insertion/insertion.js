'use strict';

function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  for (let j = sorted.length; j > i; j--) {
    sorted[j] = sorted[j - 1];
  }
  sorted[i] = value;
}

function insertionSort(input) {
  const sorted = [input[0]];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
}
