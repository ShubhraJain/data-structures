var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue 
    var currentSize = someInstance.size();
    if (currentSize > 0) {
      for (var i = currentSize; i > -1; i--) {
        someInstance.storage[i + 1] = someInstance.storage[i];
      }
      someInstance.storage[1] = value;
    } else {
      someInstance.storage[1] = value;
    }
  };

  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    var currentSize = someInstance.size();
    var dequeued = someInstance.storage[currentSize];
    delete someInstance.storage[currentSize];
    return '' + dequeued;
  };

  someInstance.size = function() {
    // Return the number of items in the queue
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};