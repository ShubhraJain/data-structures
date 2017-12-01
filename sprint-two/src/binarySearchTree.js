var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(target) {
  var newTree = BinarySearchTree(target);
  if (this.value < target) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      (this.right).insert(target);
    }
  } else {
    if (this.left === null) {
      this.left = newTree;
    } else {
      (this.left).insert(target);
    }
  }
};

binaryTreeMethods.contains = function(target) {
  
};

binaryTreeMethods.depthFirstLog = function(callBack) {
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
