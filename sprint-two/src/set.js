var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// TC: constant
setPrototype.add = function(item){
	this._storage.push(item);
};

// TC: linear
setPrototype.contains = function(item){
	return _.contains(this._storage, item);
};

// TC: linear
setPrototype.remove = function(item){
	var i = _.indexOf(this._storage, item);
	this._storage.splice(i, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
