var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
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

  treeMethods.traverse = function(callBack) {
    callBack(this.value);
    if (tree.children) {
        tree.children.each(function(child) {
            callBack(child);
        });
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addChild : Constant complexity, O(1)
 treeMethods.contains : Linear complexity, O(n)
 */
