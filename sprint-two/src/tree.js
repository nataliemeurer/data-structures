var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = makeTree(value);
  if( this.children === undefined ) {
    this.children = [];
  }

  this.children.push(newNode);

};

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
