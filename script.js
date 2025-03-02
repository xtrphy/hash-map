export class HashMap {
  constructor(capacity = 8, loadFactor = 0.75) {
    this.buckets = new Array(capacity);
    this.size = 0;
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
    this.size++;

    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;

    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
    this.size = 0;
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          valuesArray.push(pair[1]);
        }
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        entriesArray.push(bucket);
      }
    }

    return entriesArray;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.buckets.length * 2);
    this.size = 0;

    for (let bucket of oldBuckets) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}

export class HashSet {
  constructor(capacity = 8) {
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }

    return hashCode % this.buckets.length;
  }

  add(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    if (!this.buckets[index].includes(key)) {
      this.buckets[index].push(key);
      this.size++;

      if (this.size / this.buckets.length > 0.75) {
        this.resize();
      }
    }
  }

  has(key) {
    const index = this.hash(key);
    return this.buckets[index] ? this.buckets[index].includes(key) : false;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;

    const keyIndex = this.buckets[index].indexOf(key);
    if (keyIndex !== -1) {
      this.buckets[index].splice(keyIndex, 1);
      this.size--;
      return true;
    }

    return false;
  }

  clear() {
    this.buckets = new Array(this.buckets.length);
    this.size = 0;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(this.buckets.length * 2);
    this.size = 0;

    for (let bucket of oldBuckets) {
      if (bucket) {
        for (let key of bucket) {
          this.add(key);
        }
      }
    }
  }
}