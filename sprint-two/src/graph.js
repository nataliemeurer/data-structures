var Graph = function(){
	this.nodes = {};
	this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  // check size // 0
  // check toNode

  // make a node out of newNode
  var node = { edges: [] };

  // add a newNode key to our nodes
  this.nodes[newNode] = node;

  // increment size
  this.size++;
};

Graph.prototype.contains = function(node){
  // check graph for passed in value
  // if it exists
  if (this.nodes[node] !== undefined) {
    return true;
  // if not return false
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  // check if that node actually exists
  var exists = this.contains(node);
  // if it does 
  if (exists) {
    var removed = this.nodes[node];
    // delete it
    delete this.nodes[node];
    // decrement size
    this.size--;
    return removed;
  } else {
  // otherwise
    return null;
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
