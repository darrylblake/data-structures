var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Get linked list or create one in absence
  var list = this._storage.get(i) || LinkedList();

  var exists = getListValueByKey(list, k);
  if (exists)
    exists.vale[1] = v;
  else
    list.addToTail([k, v]);

  this._size++;
  this._storage.set(i, list);
  this.check();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i)
  var node = getListValueByKey(list, k);
  if (node)
    return node.value[1];
  else
    return null
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(i);
  var node = getListValueByKey(list, k);
  list.remove(node);
  this._size--;

};

function getListValueByKey(list, k) {
  var node;
  list.each(function(item) {
    if (item.value[0] === k) {
      node = item;
    }
  });
  return node;
}

HashTable.prototype.check = function() {
  if (this._size / this._limit > 0.75) {
    var newLimit = this._limit * 2;
    var newStorage = LimitedArray(this._limit); 
    console.log(newStorage);
    this._storage.each(function(bucket) {
      console.log(bucket);
      bucket.each(function(item) {
        console.log(item);
      });
    });

  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
