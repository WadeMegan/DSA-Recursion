//find the next commanding officer
const BinarySearchTree = require('../binary-tree-assignments/assign3')

const main = function(){

    const bst = new BinarySearchTree()

    bst.insert(12,'Picard')
    bst.insert(8,'Riker')
    bst.insert(20,'Data')
    bst.insert(7,'Worf')
    bst.insert(9,'LaForge')
    bst.insert(22,'Crusher')
    bst.insert(6,'Security')
    bst.insert(21,'Selar')
   
    return bst.bfs()

}

console.log(main())

const officers = function(tree){

    for(let i=1;i<4;i++){
        console.log(tree,i)

    }
    /*if(tree!==null){
        //console.log(tree)
        //officers(tree.left)
    }*/
}

//console.log(officers(main()))