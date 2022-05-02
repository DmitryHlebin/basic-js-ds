const nodemon = require('nodemon');
const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 constructor () {this.treeRoot = null};
  root() {
    return this.treeRoot
  }
  add(data) {
    let node = this.treeRoot;
      this.treeRoot = addWithin(this.treeRoot, data)
        function addWithin (node, data) {
          if(!node) {
            return new Node(data);
          }
          if (node.data === data) {
            return node;
          }
          if (data < node.data){
            node.left = addWithin (node.left, data);
          } else {
            node.right = addWithin (node.right, data);
          }
          return node;
        }
  }

  has(data) {
    let node = this.treeRoot;
    while (node) {
      if (data === node.data) {
        return true;
      }
      data < node.data ? node = node.left : node = node.right;
    }
    return false;
  }

find(data) {
    let node = this.treeRoot;
    while (node.data !== data) {
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if(node === null) return null;
      if (data === node.data) {
        if (node.left === null && node.right === null) 
		{return null};
        if (node.left === null) 
		{return node.right};
        if (node.right === null) 
		{return node.left};
        let item = node.right;
        while (item.left !== null) {
          item = item.left;
        }
        node.data = item.data;
        node.right = removeNode(node.right, item.data);
        return node;
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else {
        node.right = removeNode(node.right, data);
        return node;
      } 

    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {return};

      let node = this.treeRoot;
        while(node.left) {
          node = node.left;
        }
          return node.data
        }

  max() {
    if (!this.treeRoot) {return}
    let node = this.treeRoot;
      while(node.right) {
        node = node.right
      }
      return node.data;
  }
}

module.exports = {
  BinarySearchTree
};