var Bloom = function(arr){
  this._limit = 18;
  this._storage = new Array(this._limit);
  for(var i = 0; i < arr.length; i++){
    this._storage[hash1(arr[i], this._limit)] = true;
    this._storage[hash2(arr[i], this._limit)] = true;
    this._storage[hash3(arr[i], this._limit)] = true;
  }
};

Bloom.prototype.contains = function(value){
  if((this._storage[hash1(value, this._limit)] === true) && (this._storage[hash2(value, this._limit)]=== true) && (this._storage[hash3(value, this._limit)] === true)){
    return true; //but maybe not for sure #bloomUncertainty #fall2014 #blessed #withfalsepositives
  } else{
    return false;
  }
};

var hash1 = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
}

var hash2 = function(value, size){
  if (typeof value === "string"){
    value = (value.charCodeAt(0) + 7) * (value.charCodeAt(value.length - 1) + 2);
  }
  return value % size;
}

var hash3 = function( value, size ){
  if (typeof value === "string"){
    value = value.length + value.charCodeAt( value.length - 1 ) + 4;
  }
  return value % size;
}


var testFalsePositive = function(length){
  var testArray = new Array(length);
  for( var i = 0 ; i < length; i++ ){
    testArray[i] = Math.floor(Math.random()*10000);
  }
  var countFalsePositive = 0;
  var countAllPositive = 0;
  var testBloom = new Bloom(testArray);
  for(var p = 0; p < 10000; p++){
    if(testBloom.contains(p)){
      var inside = false;
      for(var j = 0; j < testArray.length; j++){
        if( testArray[j]  ===  p){
          inside = true;
          break;
        }
      }
      if(inside === true){
        countAllPositive++;
      } else{
        countFalsePositive++;
        countAllPositive++;
      }
    }
  }
  return countFalsePositive / countAllPositive;
}
