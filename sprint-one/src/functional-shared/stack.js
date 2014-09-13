var makeStack = function() {
  var myStack = {};
  myStack.length = 0;
  _.extend(myStack, stackMethods);
  return myStack;
  //use extend to apply methods
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  if(this.length !== 0){
    var removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }
}

stackMethods.size = function(){
  return this.length;
};

