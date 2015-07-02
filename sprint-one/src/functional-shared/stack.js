var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	length: 0,
  	storage: {},
  };

  extend(someInstance, stackMethods);
  
  return someInstance;
};

stackMethods = {
	size: function() {
		return this.length;
	}, 
	push: function(value){
   		this.length++;
   		this.storage[this.length] = value;
	},
	pop: function(){
		if(this.length > 0) {
			this.length--;
		}
		return this.storage[this.length + 1];

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


