//height of a BST

const BinarySearchTree = require('./assign3')

const main1 = function(){

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

const height = function(tree, n){

    if(tree===null){
        //console.log('null')
        return n-1
    }
    else{
        //console.log('ran')
        return Math.max(height(tree.left,n+1),height(tree.right,n+1))
    }

}

console.log(height(main1(),0))
//height(tree.right,n+1),height(tree.left,n+1)
