//3rd largest node
//this solution works for this problem, but maybe wouldn't work for all???

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

const isBST = function(tree){

    let current = tree

    let end
    
    //goes down the tree 
    while(current!==null){
        //finds the absolute greatest number
        if(current.right===null){
            end=current
            //if there is a left branch on greatest number, goes down it because it will be larger than the proceeding branches and will be the next greatest number
            if(current.left!==null){
                end = current.left
                //if there is a left branch on the next , goes down it because it will be larger than the proceeding branches
                if(current.left!==null){
                    end = current.left
                }
            }
        }
        current = current.right
    }
    
    //takes the very last number and goes back up the tree twice to get the 3rd largest number
    return end.parent.parent.key
}

console.log(isBST(main()))