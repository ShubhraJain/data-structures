

// Instantiate a new graph
var Graph = function() {
  this._storage = {};
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for (var k in this._storage) {
    if (parseInt(k) === node) {
      result = true;
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var k in this._storage) {
    if (parseInt(k) === node) {
      var currentConnections = this._storage[k];
      //search array at this node to see who I'm connected to,
      for (var i = 0; i < currentConnections.length; i++) {
        this.removeEdge(node, currentConnections[i]);
      } 
      //remove those connections,
      //then remove this node
      delete this._storage[k];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._storage[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOnFrom = this._storage[fromNode].indexOf(toNode);
  var indexOnTo = this._storage[toNode].indexOf(fromNode);
  this._storage[fromNode].splice(indexOnFrom, 1);
  this._storage[toNode].splice(indexOnTo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this._storage) {
    cb(k);
  }
};

//   --->   var myGraph = new Graph;
/*
 * Complexity: What is the time complexity of the above functions?
 Graph.prototype.addNode : Constant Complexity, O(1)
 Graph.prototype.contains : Linear Complexity, O(n)
 Graph.prototype.removeNode : Quadratic Complexity, O(n^2)
 Graph.prototype.addEdge : Constant Complexity, O(1)
 Graph.prototype.hasEdge : Constant Complexity, O(1)
 Graph.prototype.removeEdge : Constant Complexity, O(1)
 Graph.prototype.forEachNode : Linear Complexity, O(n) but if the callback has 
 higher level of complexity, this might change accordingly.
 */


