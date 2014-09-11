var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if( list.head === null ) {          // if no nodes are in the linked list yet
      list.head = newNode;              // set head to first node with passed in value
      list.tail = newNode;
    } else {                             //the node after next to the incoming value
      list.tail.next = newNode;   //update tail to point to new value at the end
      list.tail = newNode;
    }
    list.size++;
  };

  list.removeHead = function(){

    var removed = this.head;
    delete this.head;
    this.head = removed.next;
    list.size--;
    return removed.value;
  };

  list.contains = function(target){
    var current = this.head;

    for(var i = 0; i < list.size; i++){
      if (current.value === target){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
