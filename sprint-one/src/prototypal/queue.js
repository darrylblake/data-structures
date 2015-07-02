var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  
  someInstance.length = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
	size: function(){
		return this.length;
	},
	enqueue: function(value){
		this.length++;
		if(this.length > 1){
			for(var i = this.length; i >= 0; i--){
				this.storage[i + 1] = this.storage[i];
			}
		}
		this.storage[0] = value;

	},
	dequeue: function(){
		var dequeued = this.storage[this.length - 1];
		if(this.length > 0){
			this.length--;
		}
		return dequeued;

	}
};


