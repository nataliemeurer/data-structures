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
      newNode.previous = list.tail;
      list.tail = newNode;
    }
    list.size++;
  };


  list.removeTail = function(){
    //if there are no nodes, return null
    if(this.size !== 0){
      var removed = this.tail;
      delete this.tail;
      if(this.size !== 1){
        //update the list's tail to be former tail's previous
        this.tail = removed.previous;
        //change new tail's next to equal null
        this.tail.next = null;
      }
      list.size--;
      return removed.value;
    } else {
      return null;
    }
  };

  list.addToHead = function(value){
    //create newNode with value
    var newNode = makeNode(value);
    //if size = 0, assign newNode to head and tail
    if(this.size === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      //else head.previous to newNode
      this.head.previous = newNode;
      //newNode.next to head
      newNode.next = this.head;
      //reassign head to newNode
      this.head = newNode;
    }
    this.size++;
    //increment size

  };

  list.removeHead = function(){
    if(this.size !== 0){
      var removed = this.head;
      delete this.head;
      if(this.size !== 1){
        this.head = removed.next;
        this.head.previous = null;
      }
      list.size--;
      return removed.value;
    } else {
      return null;
    }
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
