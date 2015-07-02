var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  
  newStack.length = 0;
  newStack.storage = {};
  
  return newStack;
};

var stackMethods = {
	size: function() {
		return this.length;
	},
	push: function(value) {
		this.length++;
		this.storage[this.length] = value;	
	},
	pop: function() {
		if (this.length > 0) {
			var popped = this.storage[this.length];
			this.length--;
			return popped;
		} else {
			return {};
		}
	}

};


