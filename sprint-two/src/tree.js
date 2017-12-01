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
    //determine if search is true
  // var search = function(obj, searchItem) {
  //   if (obj.value === searchItem) {
  //     return true;
  //   } 
  // };
  // //else
  //   //search || contains on next level
  // var i = -1;
  // if (this.children.length === 0) {
  //   return search(this, target);
    
  // } else if (i < this.children.length) {
  //   i++;
  //   return search(this, target) || this.contains.call(this.children[i], target);
  // }
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
  
  
  
  
  
  
  
  
  
  // var search = function(currNode) {
  //   // perform check on each of the children in the tree and 
  //   if (currNode.value === target) {
  //     return true;
  //   }
  // };
  
  // if (!this.children.length) {
  //   search(this);
  // } else {
  //   for (var i = 0; i < this.children.length; i++) {
  //     // if current tree is not equal to target and recurse
  //     search(this.children[i]);
  //     this.contains(this.children[i]);
  //   }
  // }  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
