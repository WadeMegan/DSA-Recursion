// what does this program do

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

//This adds up and returns all of the values on the tree. If there are no nodes on the tree, it returns 0


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
console.log(tree(main1()))


