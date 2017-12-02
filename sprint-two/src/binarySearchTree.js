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
  // variable doesContain = false
  var doesContain = false;
  //  compare target with root node
  //  if root equals target
  if (this.value === target) {
    //  doesContain = true
    doesContain = true;
  } else if (this.value < target && this.right !== null) { // if greater 
    // root becomes first right child
    // recurse on right child
    doesContain = this.right.contains(target);
  } else if (this.value > target && this.left !== null) {
    // recurse on first left child
    doesContain = this.left.contains(target);
  }
  
  return doesContain;

};

binaryTreeMethods.depthFirstLog = function(callBack) {
  // call callback on root value
  callBack(this.value);
  
  // call callback on left child
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  
  // call callback on right child
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 binaryTreeMethods.insert : Constant complexity, O(1)
 binaryTreeMethods.contains : Constant complexity, O(1)
 binaryTreeMethods.depthFirstLog : Constant complexity, O(1)  but may change if callback has
 higher complexity.
 */
