var DoublyLinkedList = function() {
  var list = {};
  list.head = null;  // we look this up to know what to remove
  list.tail = null;  //value of this is tail, and it's .next will change as we add tails

  list.addToTail = function(value) {
    
    //create an instance of Node(), whose value is value (and .next is null)
    var node = Node(value);
    
    //find the current tail
    if (!list.tail) {
      list.tail = node;
      list.head = node;
    } else {
      //change the .next of that tail (the pointer) the new node created in the above line
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;

    } 
  };

  list.addToHead = function(value) {
    var node = Node(value);

    if (!list.head) {
        list.head = node;
        list.tail = node;
    } else {
        var currentHead = list.head;
        list.head = node;
        currentHead.previous = node;
        node.next = currentHead;
    }
  }

  list.removeHead = function() {
    //find the current head
    if (!list.head) {
      return null;
    } else {
      //if head.next exists
      var currentHead = list.head;
      var currentHeadVal = currentHead.value;

      if (!list.head.next) {
        list.head = null;
      } else {
        //head is equal to head.next
        list.head = currentHead.next;
        list.head.previous = null;
        delete currentHead;
      }
      return currentHeadVal;
    }
  };

  list.removeTail = function() {
    if (!list.tail) {
        return null;
    } else {
        var currentTail = list.tail.value;
        if (list.tail.previous) {
            list.tail = list.tail.previous;
            list.tail.next = null;
        } else {
            list.head = null;
            list.tail = null;
        }
        return currentTail;
    }  
  }

  list.contains = function(target) {
    //start at head
    var currentNode = list.head;
    var result = false;
  //if head is not the target,
    while (currentNode.next) {
      if (currentNode.value === target) {
        result = true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === target) {
      result = true;
    }
    return result;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;  //doesn't exist for the tail, but helps point to next head when a head is removed
  node.previous = null;
  
  return node;
};  //instances of nodes are our next additions to the list

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail :  Constant Complexity, O(1)
 list.removeHead :  Constant Complexity, O(1)
 list.contains :  Linear Complexity, O(n)
 */
