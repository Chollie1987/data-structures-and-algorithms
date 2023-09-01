class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class NewTreeNode {
  constructor(valuel) {
    this.value = value;
    this.children = [];
  }
}

class BinTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(node) {
    console.log(node.value);
    if (node.left) {
      this.preOrder(node.left);
    }
    if (node.right) {
      this.preOrder(node.right);
    }

    return;
  }

  // inOrder(node) {}

  // postOrder(node) {}
}

class BinSearchTree extends BinTree {
  constructor(root = null) {
    super(root);
  }

  add(number, node) {
    // no root in whole tree
    let newNode = new TreeNode(number);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (number === node.value) return;

    if (number < node.value) {
      if (node.left) this.add(number, node.left);
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

  maxValue(node) {
    if (!node) return null;

    const leftMax = this.maxValue(node.left);
    const rightMax = this.maxValue(node.right);

    if (leftMax === null && rightMax === null) {
      return node.value;
    } else {
      return Math.ceil(node.value, leftMax, rightMax);
    }
  }

  breadthFirst(tree) {
    if (!tree) {
      return[];
    }

    const result = [];
    const queue = [tree];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }


fizzBuzzTree(root) {
  if (!root) {
  return null;
  }

  const newRoot = new TreeNode();

traverse(oldNode, newNode) {
    if ( oldNode.value % 3 === 0 && oldNode.value % 5 === 0) {
  newNode.value = 'FizzBuzz';
  } else if (oldNode.value % 3 === 0) {
  newNode.value = 'Fizz';
  } else if (oldNode.value % 5 === 0) {
  newNode.value = oldNode.value.toString();
  }
  return newRoot;
  }
}

module.exports = { TreeNode, NewTreeNode, BinSearchTree, BinTree };
