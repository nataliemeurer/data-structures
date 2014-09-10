var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function(){
    if(size !== 0){
      var dequeued = storage[1];
      delete storage[1];
      for (var i = 1; i < size; i++){
        storage[i] = storage[i+1];
      }
      delete storage[size];
      size--;
      return dequeued;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
