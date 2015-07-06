var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    // setting the head to the first entered node
    if (list.head === null) {
      list.head = node;
    }
    // Setting old tail next to new node.
    if (list.tail !== null) {
      node.prev = list.tail;
      list.tail.next = node;
    }
    list.tail = node;
    return node;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next
    if (list.head) {
      list.prev = null;
    }
    return result;
  };

  list.contains = function(target){
    node = list.head;
    result = false;
    while (node !== null) {
      if (node.value === target) {
        result = true;
        break;
      }
      // Setting node to next node
      node = node.next;
    }
    return result;
  };

  // Added to aid hashTable.js
  list.each = function(callback) {
    var node = this.head;
    while (node !== null) {
      callback(node);
      node = node.next
    }
  }

  list.get = function(value) {
    var selected;
    this.each(function(item) {
      if (item.value === value) {
        selected = item;
      }
    });
    return selected;
  }

  list.remove = function(node) {
    if (node.prev)
      node.prev.next = node.next;
    else 
      list.head = null;
    if (node.next)
      node.next.prev = node.prev;
    else
      list.tail = null;
  }


  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
