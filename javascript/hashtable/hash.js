class Hashtable {
  constructor(size = 99) {
    this.size = size;
    this.keys = {};
    this.buckets = new Array(size);
  }


  hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  }

  update(index, key, value) {
    const array = this.buckets[index];
    for (let i = 0; i < array.length; i++) {
      if (array[i].key === key) {
        array[i].value = value;
        return; 
      }
    }
  }

  set(key, val) {
    let index = this.hash(key) % this.size;
    if (this.buckets[index]) {
      if (this.keys[key]) {
        this.update(index, key, val);
      } else {
        this.buckets[index].push({ key, val });
      }
      
    } else {
      this.buckets[index] = [{ key, val }];
    }
    this.keys[key] = true;
  }


  get(key) {
    let index = this.hash(key) % this.size;
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i].key === key) {
          return this.buckets[index][i].val;
        }
      }
    }
    return undefined;
  }

  has(key) {
    return this.keys[key] !== undefined;
  }

 
  keys() {
    return Object.keys(this.keys);
  }
}

