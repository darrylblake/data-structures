var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.size = function() {
  return this._tail - this._head;
}

Queue.prototype.enqueue = function(value) {
  this._storage[this._tail] = value;
  this._tail++;
}

Queue.prototype.dequeue = function() {
  var dequeued = this._storage[this._head];
  delete this._storage[this._head];
  this.size() && this._head++;
  return dequeued;
}