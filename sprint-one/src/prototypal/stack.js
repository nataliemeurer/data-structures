var makeStack = function() {
  var myStack = Object.create(stackMethods);
  myStack.length = 0;
  return myStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if(this.length !== 0){
    var removed = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return removed;
  }
};

stackMethods.size = function(){
  return this.length;
};


