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
    if (list.tail !== null)
      list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next
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

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
