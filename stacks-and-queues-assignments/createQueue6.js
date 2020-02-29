const Queue = require('./assign6')

const main = function(){

    const starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    return starTrekQ
}

//console.log(main())

//peek - O(1) time
const peek = function(q){

    return q.first 

}

//console.log(peek(main()))

//isEmpty - O(1) time
const isEmpty = function(q){
    if(!q.first){
        return true
    }
    return false
}

//console.log(isEmpty(main()))

//display - logarithmic because it could end immediately if empty q
const display = function(q){
    let currNode = q.first
    //if the queue is empty 
    if (!q.first){
        return 
    }

    while(currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
    }
}

console.log(display(main()))