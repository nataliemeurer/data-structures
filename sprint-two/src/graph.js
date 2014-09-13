var Graph = function(){
<<<<<<< HEAD
	this.nodes = {};
	this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  // check toNode
  // check size // 0
  var node = { edges: [] };
  
  if( this.size === 0 ){
    this.nodes[newNode] = node; 
    this.size++; 
  } else if ( this.size === 1 ){
      var onlyNode = Object.keys(this.nodes)[0];
      this.nodes[newNode] = node;
      this.addEdge(newNode, onlyNode);
      this.size++;
    }else {
      if(/*toNode !== undefined &&*/ this.contains(toNode)) { 
        this.nodes[newNode] = node; 
        this.addEdge(newNode, toNode);
        this.size++;
      }
    }
};

Graph.prototype.contains = function(node){
  if (this.nodes[node] !== undefined) {
    return true;
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
  if ( this.nodes[fromNode].edges.indexOf(toNode) !== -1 ){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if ( fromNode && toNode ){
    if(this.contains(fromNode) && this.contains(toNode)){
      this.nodes[fromNode].edges.push(toNode);
      this.nodes[toNode].edges.push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){


  var fromIdx = this.nodes[fromNode].edges.indexOf(toNode);
  var toIdx = this.nodes[toNode].edges.indexOf(fromNode);
  if ( fromNode && toNode ){
    if(this.contains(fromNode) && this.contains(toNode)){
      this.nodes[fromNode].edges.splice(fromIdx, 1);
      this.nodes[toNode].edges.splice(toIdx, 1);
    }
  }
  if ( this.nodes[fromNode].edges.length === 0 && this.nodes[toNode].edges.length === 0 ){
    this.removeNode(fromNode);
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
