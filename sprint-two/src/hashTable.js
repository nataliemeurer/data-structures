var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = 0;
  var newItem = [key, value];
  if( typeof key === "string" ){
    i = getIndexBelowMaxForKey(key, this._limit);
  } else {
    i = intHash(key, this._limit);
  }
  if ( Array.isArray(this._storage[i]) ){
    this._storage[i].push(newItem);
  } else {
    this._storage[i] = [];
    this._storage[i].push(newItem);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = 0;
  if( typeof key === "string" ){
    i = getIndexBelowMaxForKey(key, this._limit);
  } else {
    i = intHash(key, this._limit);
  }

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
  var i = 0;
  if( typeof key === "string" ){
    i = getIndexBelowMaxForKey(key, this._limit);
  } else {
    i = intHash(key, this._limit);
  }
  var hashArray = this._storage[i];

  if(!Array.isArray(hashArray)){
    return;
  } else if ( Array.isArray(hashArray) ) {
    for(var j = 0; j < hashArray.length; j++){
      if(hashArray[j][0] === key) {
        hashArray.splice(j, 1);
      }
    }
  } else {
    return;
  }
};

var intHash = function(key, max){
  return key % max;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// ctrl + command + up
