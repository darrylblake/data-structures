

var Graph = function(){
	this.nodes = {}
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {
		value: node,
		edges: []
	}
};

Graph.prototype.contains = function(node){
	return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
	delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	edges = this.nodes[fromNode].edges;
	return _.contains(edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodes[fromNode].edges.push(toNode);
	this.nodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	edges = this.nodes[fromNode].edges;
	// Finding the edge to delete
	i = _.indexOf(edges, toNode);
	// Removing the edge
	edges.splice(i, 1);
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(node) {
		cb(node);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



