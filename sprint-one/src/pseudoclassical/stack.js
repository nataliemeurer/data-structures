var Stack = function() {
  this.length = 0;
};

Stack.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  if( this.length !== 0 ){
    var removed = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removed;
  }
};

Stack.prototype.size = function(){
  return this.length++;
};
