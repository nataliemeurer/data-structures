var makeQueue = function() {
  var myQueue = Object.create(queueMethods);
  myQueue.length = 0;
  return myQueue;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  if( this.length !== 0){
    var removed = this[0];
    delete this[0];
    for(var i = 0; i < this.length; i++){
      this[i] = this[i + 1];
    }
    this.length--;
    return removed;
  }
}

queueMethods.size = function(){
  return this.length;
}
