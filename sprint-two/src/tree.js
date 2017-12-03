//ADVANCED CONTENT: Add Parent Links to your tree

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};



treeMethods.addChild = function(value) {
  var child = Tree(value);  
  child.parent = this;
  this.children.push(child);
};

// A .removeFromParent() method, which disassociates the tree with its parent (in both directions)

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

treeMethods.removeFromParent = function(target) {
  var cutTree = {};
  
  var search = function (tree, target) {
    if (tree.value === target) {
      for (var j = 0; j < tree.parent.children.length; j++) {
        if (tree.parent.children[j].value === target) {
          cutTree = tree.parent.children[j];
          delete tree.parent.children[j];
        }
      }
      tree.parent = null;
    } else {
      if (tree.children) {
        for (var i = 0; i < tree.children.length; i++) {
          search(tree.children[i], target);
        }
      }
    }
  };

  search(this, target);
  return cutTree;
};
  

/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addChild : Constant complexity, O(1)
 treeMethods.contains : Linear complexity, O(n)
 treeMethods.removeFromParent : Linear complexity, O(n)
 */
