var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
  newNode.parent = this;
  if( this.children === undefined ) {
    this.children = [];
  }
  this.children.push(newNode);

};

treeMethods.removeParent = function(){
  var currentIndex = 0;
  for(var i = 0; i < this.parent.children.length; i++){
    if (this.parent.children[i] === this){
      currentIndex = i;
    }
  }
  this.parent.children.splice(currentIndex, 1);
  this.parent = null;
}

treeMethods.contains = function(target){
  var found = false;
  var find = function(treeItem){
    if( target === treeItem.value ){
      found = true;
    } else {
      if( treeItem.children !== undefined ){
        for( var i = 0; i < treeItem.children.length; i++){
          find(treeItem.children[i]);
        }
      }
    }
    return found;
  }
  return find(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
