var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance._length = 0;
  someInstance._storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this._length;
}

stackMethods.push = function(value) {
  this._storage[this._length] = value;
  this._length++;
}

stackMethods.pop = function() {
  this._length && this._length--;
  results = this._storage[this._length];
  delete this._storage[this._length];
  return results;
}


