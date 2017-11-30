var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, random.queueMethods);
  return someInstance;
};
var random = {};

random.queueMethods = {
  enqueue : function(value) {
    // Add a string to the back of the queue 
    var currentSize = this.size();
    if (currentSize > 0) {
      for (var i = currentSize; i > -1; i--) {
        this.storage[i + 1] = this.storage[i];
      }
      this.storage[1] = value;
    } else {
      this.storage[1] = value;
    }
  }, dequeue : function() {
    // Remove and return the string at the front of the queue
    var currentSize = this.size();
    var dequeued = this.storage[currentSize];
    delete this.storage[currentSize];
    return '' + dequeued;
  }, size : function() {
    // Return the number of items in the queue
    return Object.keys(this.storage).length;
  }
};

