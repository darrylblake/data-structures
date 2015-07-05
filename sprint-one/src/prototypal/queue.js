var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance._storage = {};
  someInstance._head = 0
  someInstance._tail = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this._tail - this._head;
}

queueMethods.enqueue = function(value) {
  this._storage[this._tail] = value;
  this._tail++;
}

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    result = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return result;
  }
}

