var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.expand = function(){
  var oldStorage = [];
  for(var i = 0; i < this._limit; i++){
     if(this._storage[i] !== undefined){
      oldStorage.push(this._storage[i]);
     }
  }
  this._limit *= 2;
  this._storage = makeLimitedArray(this._limit);
  this.size = 0;
  for(var i = 0; i < oldStorage.length; i++){
      for(var j = 0; j < oldStorage[i].length; j++){
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
};

HashTable.prototype.shrink = function(){
  var oldStorage = [];
  for(var i = 0; i < this._limit; i++){
     if(this._storage[i] !== undefined){
      oldStorage.push(this._storage[i]);
     }
  }
  this._limit /= 2;
  this._storage = makeLimitedArray(this._limit);
  this.size = 0;
  for(var i = 0; i < oldStorage.length; i++){
      for(var j = 0; j < oldStorage[i].length; j++){
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
  }
  delete oldStorage;
};

HashTable.prototype.insert = function(key, value){
  if(this.size >= (this._limit*.75)){
    this.expand();
  }
  var newItem = [key, value];
  var i = getIndexBelowMaxForKey(key, this._limit);
  if ( Array.isArray(this._storage[i]) ){
    this._storage[i].push(newItem);
  } else {
    this._storage[i] = [];
    this._storage[i].push(newItem);
  }
  this.size++;
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if( !Array.isArray(this._storage[i]) ){
    return null;
  } else if ( Array.isArray(this._storage[i]) ){
    for( var j = 0; j < this._storage[i].length; j++ ){
      if( this._storage[i][j][0] === key ){
        return this._storage[i][j][1];
      }
    }
    return null;
  } else {
    return null;
  }
  // if it is an array, iterate through the arrays inside of the array using for
    // if innerArray[0] == key, return innerarray[1]
};

HashTable.prototype.remove = function(key){
  if(this.size <= (this._limit*.25)){
    this.shrink();
  }
  if(this.size === 0){
    return null;
  }

  var i = getIndexBelowMaxForKey(key, this._limit);
  var hashArray = this._storage[i];

  if(!Array.isArray(hashArray)){
    return;
  } else if ( Array.isArray(hashArray) ) {
    for(var j = 0; j < hashArray.length; j++){
      if(hashArray[j][0] === key) {
        hashArray.splice(j, 1);
        this.size--;
      }
    }
  } else {
    return;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// ctrl + command + up
