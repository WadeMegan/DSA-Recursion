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

console.log(main1())

const main2 = function(){

    let BST = new BinarySearchTree()

    BST.insert("E")
    BST.insert("A")
    BST.insert("S")
    BST.insert("Y")
    BST.insert("Q")
    BST.insert("U")
    BST.insert("E")
    BST.insert("S")
    BST.insert("T")
    BST.insert("I")
    BST.insert("O")
    BST.insert("N")

    return BST

}

console.log(main2())