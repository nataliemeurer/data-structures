var makeQueue = function(){
  var newQueue = {};
  newQueue.length = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

queueMethods = {};

queueMethods.enqueue = function(value){
	this.length++;
	this[this.length] = value;
}

queueMethods.dequeue = function(){
	if ( length !== 0){
		var removed = this[this.length];
		delete this[this.length];
		for ( var i = 0; i < this.length; i++){
			this[i] = this[i + 1];
		}
		this.length--;
		return removed;
	}
}

queueMethods.size = function() {
	return this.length;
}
