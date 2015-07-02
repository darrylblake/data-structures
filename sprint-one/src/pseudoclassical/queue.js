var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
	return this.length;
};

Queue.prototype.enqueue = function(value) {
	this.length++;
	if (this.length > 1) {
		// we now understand we could decrease the time complexity by treating first index as the front of the que
		// and the length as the back so we don't have to iterate through the entire object each time.
		for (var i = this.length; i >= 0; i--) {
			this.storage[i+1] = this.storage[i];
		}
	}
	this.storage[0] = value;
};

Queue.prototype.dequeue = function() {
	var dequeued = this.storage[this.length-1];
	if (this.length > 0) {
		this.length--;
	}
	return dequeued;
};
