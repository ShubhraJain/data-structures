var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    //check size of the this.storage object,
    var currentSize = this.size();
    //make a new key set to the size + 1, and set the value at that key to "value" coming in.
    this.storage[currentSize + 1] = value;
  },

  pop: function() {
      //find out the size of storage,
    var currentSize = this.size();
    //if the size of the storage object is 0,
    if (currentSize < 1) {
      //we won't do anything, or return null, or something default
      return null;
    } else {
      //go to that key 
            
      //store it in a temporary variable that we don't delete,
      var tempVar = this.storage[currentSize];
      //delete the key,
      delete this.storage[currentSize];
      //return the temporary variable that's storing that value
      return '' + tempVar;
    } 
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


