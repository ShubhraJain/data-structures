

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, bucket);
  } else {
    bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
      }
    }
  }
  
  bucket.push([k, v]);
  
  return this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (Array.isArray(this._storage.get(index))) {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable.prototype.insert : Linear complexity, O(n)
 HashTable.prototype.retrieve : Linear complexity, O(n)
 HashTable.prototype.remove : Constant complexity, O(1)
 
 */


