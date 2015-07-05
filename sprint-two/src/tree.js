var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

// Time Complexity: Exponential
treeMethods.contains = function(target){
  var result = false;
  function subroutine(node) {
    // Base case
    if (node.value === target)
      result = true;
    // Recursive case
    if (node.children) {
      _.each(node.children, function(child) {
        subroutine(child);
      });
    }
  }
  subroutine(this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
