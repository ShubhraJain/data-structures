var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //check size of the someInstance.storage object,
    var currentSize = someInstance.size();
    //make a new key set to the size + 1, and set the value at that key to "value" coming in.
    someInstance.storage[currentSize + 1] = value;
  };

  someInstance.pop = function() {
      //find out the size of storage,
    var currentSize = someInstance.size();
    //if the size of the storage object is 0,
    if (currentSize < 1) {
      //we won't do anything, or return null, or something default
      return null;
    } else {
      //go to that key 
            
      //store it in a temporary variable that we don't delete,
      var tempVar = someInstance.storage[currentSize];
      //delete the key,
      delete someInstance.storage[currentSize];
      //return the temporary variable that's storing that value
      return '' + tempVar;
    } 
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};


