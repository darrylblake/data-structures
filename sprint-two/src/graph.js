var Graph = function(){
	this.storage = {};
};

// Time Complexity: Constant Time O(1)
Graph.prototype.addNode = function(node){
	this.storage[node] = {
		value: node,
		edges: []
	};
};

// Time Complexity: Constant Time O(1)
Graph.prototype.contains = function(node){
	return !!this.storage[node];
};

// Time Complexity: Constant Time O(1)
Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

// Time Complexitiy: Linear O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
	return _.contains(this.storage[fromNode].edges, toNode);
};

// Time Complexity: Constant Time O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].edges.push(toNode);
	this.storage[toNode].edges.push(fromNode);
};

// Time Complexity: Constant Time O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
	var removeSingleEdge = function(fromNode, toNode){
		var edges = this.storage[fromNode].edges;
		var i = edges.indexOf(toNode);
		edges.splice(i, 1);
	};
	removeSingleEdge.call(this, fromNode, toNode);
	removeSingleEdge.call(this, toNode, fromNode);
};

// Time Complexitiy: Linear O(n)
Graph.prototype.forEachNode = function(cb){
	_.each(this.storage, function(item) {
		cb(item.value);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



