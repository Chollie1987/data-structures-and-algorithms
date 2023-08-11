'use strict';

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}
class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }
  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogQueue.pop() || null;
    } else if (pref === 'cat') {
      return this.catQueue.pop() || null;
    } else {
      return null;
    }
  }
}

module.exports = { Animal, AnimalShelter};
