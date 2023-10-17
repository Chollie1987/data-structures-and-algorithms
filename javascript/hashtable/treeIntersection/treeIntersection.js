class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeIntersection(tree1, tree2) {
  if (!tree1 || !tree2) {
    return [];
  }

  const tree1Values = {};

  //function traversing through the first tree and storing values in an object
  const traverseAndStoreValues = (node) => {
    if (node) {
      tree1Values[node.value] = true;
      traverseAndStoreValues(node.left);
      traverseAndStoreValues(node.right);
    }
  };

  //store values in the object
  traverseAndStoreValues(tree1);

  const intersectionValues = [];

  //traverse second tree and check for duplicates
  const traverseAndCheckIntersection = (node) => {
    if (node) {
      if (tree1Values[node.value]) {
        intersectionValues.push(node.value);
      }
      traverseAndCheckIntersection(node.left);
      traverseAndCheckIntersection(node.right);
    }
  };

  //check for duplicates
  traverseAndCheckIntersection(tree2);

  return intersectionValues;
}

