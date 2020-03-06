//is it a BST

const BinarySearchTree = require('./assign3')

const main = function(){

    let BST = new BinarySearchTree()

    BST.insert(3)
    BST.insert(1)
    BST.insert(4)
    BST.insert(6)
    BST.insert(9)
    BST.insert(2)
    BST.insert(5)
    BST.insert(7)

    return BST

}

const isBST = function(tree,min,max){
    // console.log(min,max) //if you want to see what's happening
    if(tree==null){
        return true
    }
    if(tree.key<=min || tree.key>max){
        return false
    }
    return isBST(tree.left,min,tree.key) && isBST(tree.right,tree.key,max)

}

console.log(isBST(main(),-1000000,1000000))

