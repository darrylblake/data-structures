var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  // a, b
  someInstance.enqueue = function(value){
    length++;
    if (length > 1) {
      for (var i = 0; i < length; i++) {
        storage[i + 1] = storage[i];
      }
    }
    storage[0] = value;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[length-1];
    
    if (length > 0) {
      length--;
    }
    return dequeued;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
