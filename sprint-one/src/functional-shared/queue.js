var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	length: 0,
  	storage: {}
  };
  extend(someInstance, queueMethods)
  return someInstance;
};

var queueMethods = {
	size: function(){
		return this.length;
	},
	enqueue: function(val) {
		this.length++;
		if (this.length > 1) {
			for (var i = this.length; i >= 0; i--){
				this.storage[i+1] = this.storage[i];
			}
		}
		this.storage[0] = val;
	},
	dequeue: function() {
		var dequeued = this.storage[this.length-1];		
		if (this.length > 0) {
			this.length--;
		} 
		return dequeued;
	}
};

var each = function(collection, iterator) {
  if(Array.isArray(collection) === true) {
    for(var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if(typeof collection === "object") {
    for(var key in collection) {
      iterator(collection[key], key, collection);
    }
  }    
};

var extend = function(obj) {
	_.each(arguments, function(innerObj){
		_.each(innerObj, function(objProp, key){
			obj[key] = objProp;
		});
	});
	return obj;
};
