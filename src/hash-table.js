/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  hasReachedCapacity() {
    let fillLevel = 0;

    this.storage.each(bucket => {
      if (bucket) fillLevel++;
    });

    const isFilled = fillLevel / this.limit >= 0.75;

    return isFilled;
  }

  resize() {
    const newLimit = this.limit * 2;
    const oldStorage = this.storage;

    this.limit = newLimit;
    this.storage = new LimitedArray(this.limit);

    oldStorage.each(bucket => {
      if (!bucket) return;

      bucket.forEach(([...pair]) => {
        this.insert(...pair);
      });
    });
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    if (this.hasReachedCapacity()) this.resize();

    const bucket = getIndexBelowMax(key.toString(), this.limit);
    const storageBucket = this.storage.get(bucket);

    if (storageBucket === undefined) {
      this.storage.set(bucket, [[key, value]]);
      return;
    }

    this.storage.each(bucket => {
      if (!bucket) return;

      bucket.forEach(([currKey, currVal]) => {
        if (currKey === key) {
          currVal = value;
          return;
        }
      });
    });

    storageBucket.push([key, value]);

    this.storage.set(bucket, storageBucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const bucket = getIndexBelowMax(key, this.limit);
    const storageBucket = this.storage.get(bucket);

    if (storageBucket === undefined) return;

    this.storage.each(bucket => {
      if (!bucket) return;

      bucket.forEach(([currKey], idx) => {
        if (currKey === key) {
          bucket.splice(idx, 1);
          return;
        }
      });
    });
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const bucket = getIndexBelowMax(key.toString(), this.limit);
    const storageBucket = this.storage.get(bucket);

    if (storageBucket === undefined) return;

    let retrievedVal;

    this.storage.each(bucket => {
      if (!bucket) return;

      bucket.forEach(([currKey, currVal]) => {
        if (currKey === key) {
          retrievedVal = currVal;
          return;
        }
      });
    });

    return retrievedVal;
  }
}

module.exports = HashTable;
