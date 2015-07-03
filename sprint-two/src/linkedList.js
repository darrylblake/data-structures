var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    // 0 nodes
    if(list.head === null){
      list.head = newNode;
    } else {
      // 1 node, head.next not yet set
      if(list.head.next === null){
        list.head.next === list.tail;
      }
      // 1+ nodes
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    // move the head pointer to 
    //list.head = list.head.next
    var removedHead = list.head;
    if (list.head.next) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    return removedHead.value;
  };

  list.contains = function(target){
    var position = list.head;
    var result = false;
    while(position){
      if(position.value === target){
        result = true;
      }
      position = position.next;
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
