var makeStack = function() {
  var newStack = {};
  newStack.length = 0;
  _.extend(newStack, stackMethods);
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value){
	this.length++;
	this[this.length] = value;
};

stackMethods.pop = function(){
	if (this.length !== 0 ){
		var popped = this[this.length];
		delete this[this.length];
		this.length--;
		return popped;
	}
};

stackMethods.size = function(){
	return this.length;
}

