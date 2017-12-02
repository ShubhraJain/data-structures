var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // base case: no children
    //determine if search is trees
  var res = false;
  
  if (this.value === target) {
    return true;
  } 
  
  if (this.children) {
    for (var i = 0; i < this.children.length && res === false; i++) {
      res = (this.children[i]).contains(target);
    }
  }
  
  return res;
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addChild : Constant complexity, O(1)
 treeMethods.contains : Linear complexity, O(n)
 */
