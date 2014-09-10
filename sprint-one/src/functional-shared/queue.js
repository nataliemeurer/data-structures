var makeQueue = function(){

  // make a queue object
  var myQueue = {};
  // store queue values
  myQueue.length = 0;
  // extend queue with queueMethods
  _.extend(myQueue, queueMethods);
  // return the queue object
  return myQueue;

};

var queueMethods = {};

// enqueue

queueMethods.enqueue = function(value){
  this[this.length] = value;
  this.length++;
};

// dequeue

queueMethods.dequeue = function() {
  if( this.length !== 0 ){
    var removed = this[0];
    delete this[0];
    for( var i = 0; i < this.length; i++ ){
      this[i] = this[i+1];
    }
    this.length--;
    return removed;
  }
};

// size

queueMethods.size = function() {
  return this.length;
};
