const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)

    if (this.rootNode === null) {
      this.rootNode = newNode
    } else {
      let currentNode = this.rootNode

      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode
            break
          } else {
            currentNode = currentNode.left
          }
        } else if (data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = newNode
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }

  find(data) {
    let currentNode = this.rootNode

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode
      } else if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let node = this.rootNode
    
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    let node = this.rootNode
    
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
}