class Node TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value = value;
    this.left = left;
    this.right = right;
  }
}

class BinTree {
  constructor(root = null){
    this.root = root;
  }


  preOrder(node) {
    console.log(node.value)
    if (node.left) {
      this.preOrder(node.left);
    }
    if(node.right) {
      this.preOrder(node.right);
    }

    return;
  }

  inOrder(node) {

  }

  postOrder(node) {

  }
}

class BinSearchTree extends BinTree {
  constructor(root = null) {
    super(root);
  }

  add(number, node) {
    // no root in whole tree
    let newNode = new TreeNode(number);
    if (!this.root) {
      this.root = newNode
      return;
    }

    if (number === node.value) return;

    if (number < node.value) {
      if  (node.left) this.add(number, node.left);
      else {
        node.left = newNode;
        return;
      }
    }

    if (number > node.value) {
      if (node.right) this.add(number, node.right);
      else {
        node.right = newNode;
        return;
      }
    }
  }
}

module.exports = {Node, BinSearchTree, BinTree};
