//ORIGINAL IMPLEMENTATION: 
// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = []; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   if ((this._storage).indexOf(item) === -1) {
//     this._storage.push(item);
//   }
// };

// setPrototype.contains = function(item) {
//   return ((this._storage).indexOf(item) >= 0);
// };

// setPrototype.remove = function(item) {
//   if (this.contains(item)) {
//     var index = (this._storage).indexOf(item);
//     (this._storage).splice(index, 1);
//   }
// };

//RE-IMPLEMENTATION Using our understanding of Hash Tables to refactor such that
//all functions/methods are O(1) constant time complexity:
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(this._storage).hasOwnProperty(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return (this._storage).hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 setPrototype.add: Constant time complexity O(1)
 setPrototype.contains: Constant time complexity O(1)
 setPrototype.remove: Constant time complexity O(1)
 */
