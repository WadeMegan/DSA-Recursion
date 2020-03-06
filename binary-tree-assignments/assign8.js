//balanced BST
const BinarySearchTree = require('./assign3')

const main = function(){

    let BST = new BinarySearchTree()

    BST.insert(3)
    BST.insert(1)
    BST.insert(4)
    BST.insert(6)
    //BST.insert(9)
    BST.insert(2)
    //BST.insert(5)
    //BST.insert(7)

    return BST

}

const minDepth=function(node){
    if(node===null){
        return 0
    }
    return 1+Math.min(minDepth(node.left), minDepth(node.right))
}

const maxDepth=function(node){
    if(node===null){
        return 0
    }
    return 1+Math.max(maxDepth(node.left), maxDepth(node.right))
}

const isBalanced = function(tree){
    if(tree===null){
        return undefined
    }
    return maxDepth(tree)-minDepth(tree)<=1
}

console.log(isBalanced(main()))