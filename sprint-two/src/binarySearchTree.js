var makeBinarySearchTree = function(value){
  var tree = makeNode(value);

  tree.insert = function(val){
    var newNode = makeNode(val);

    var test = function(compNode){
      if (newNode.value < compNode.value){
        if(compNode.left !== null){
          test(compNode.left);
        } else {
          compNode.left = newNode;
        }
      } else {
          if( compNode.right !== null ){
            test(compNode.right);
          } else {
            compNode.right = newNode;
          }
      }
    }; // end of test()
    test(tree);
  }; // end of insert

  tree.contains = function(target){
    var found = false;
    var find = function(checkNode){
      if( target === checkNode.value ){
        found = true;
      } else if( target > checkNode.value && checkNode.right !== null ){
        find(checkNode.right);
      } else if( target < checkNode.value && checkNode.left !== null ){
        find(checkNode.left);
      } else{
        return;
      }
    };
    find(tree);
    return found;
  };

  tree.depthFirstLog = function(iterator){
    var action = function(nodeLoc){
      iterator(nodeLoc.value);
      if(nodeLoc.right !== null){
        action(nodeLoc.right);
      } else if(nodeLoc.left !== null){
        action(nodeLoc.left);
      }
    }
    action(tree);

  };

  return tree;
};

var makeNode = function(val){
  var node = {};
  node.value = val;
  node.left = null;
  node.right = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
