//find the next commanding officer
const BinarySearchTree = require('../binary-tree-assignments/assign3')

const Queue = require('../stacks-and-queues-assignments/assign6')

const bfs=function(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}

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
   
    //console.log(bst)

    return bfs(bst,['Picard','Riker','Data','Worf','LaForge','Crusher','Security','Selar'])

}



console.log(main())

const officers = function(tree){



}

//console.log(officers(main()))