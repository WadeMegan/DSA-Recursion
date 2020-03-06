const BinarySearchTree = require('../binary-tree-assignments/assign3')


const main = function(){

    const bst = new BinarySearchTree()

    bst.insert(25)
    bst.insert(15)
    bst.insert(50)
    bst.insert(10)
    bst.insert(24)
    bst.insert(35)
    bst.insert(70)
    bst.insert(4)
    bst.insert(12)
    bst.insert(18)
    bst.insert(31)
    bst.insert(44)
    bst.insert(66)
    bst.insert(90)
    bst.insert(22)
    let s = bst.find('25')
    //console.log(bst)
   
    return bst

}

//preOrder 
//visit root, traverse left subtree, traverse right subtree

const preOrder = function(tree){
    if (tree !== null && tree.key !== null) {
        console.log(tree.key)
        preOrder(tree.left);
        preOrder(tree.right);
    }
}

//console.log(preOrder(main()))

//inOrder 
//traverse left subtree, visit root, traverse right subtree

const inOrder = function(tree){
    if(tree!==null){
        inOrder(tree.left)
        console.log(tree.key)
        inOrder(tree.right)
    }
}

//console.log(inOrder(main()))

//postOrder
//traverse left subtree, traverse right subtree, visit root

const postOrder = function(tree){
    if(tree!==null){
        postOrder(tree.left)
        postOrder(tree.right)
        console.log(tree.key)
    }
}

//console.log(postOrder(main()))







