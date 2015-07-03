var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};



var treeMethods = {};

// TC: constant
treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

// TC: exponential
treeMethods.contains = function(target){
	var result = false;
	
	var checkChildren = function(tree) {
		// base case
		if (tree.value === target) {
			result = true;
		}
		// recursive case
		if (tree.children) {
			_.each(tree.children, function(child) {
				checkChildren(child);
			});
		}
	}
	
	checkChildren(this);
	
	return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
