//square dance pairing

const Queue = require('./assign6')

const main = function(){

    const q = new Queue()

    q.enqueue('F Jane')
    q.enqueue('M Frank')
    q.enqueue('M John')
    q.enqueue('M Sherlock')
    q.enqueue('F Madonna')
    q.enqueue('M David')
    q.enqueue('M Christopher')
    q.enqueue('F Beyonce')

    return q
}

const dance = function(q){

    let currNode = q.first

    let females = new Queue()
    let males = new Queue()

    while(currNode!==null){
        
        if(currNode.value[0]==='F'){
            females.enqueue(currNode.value)
        }
        else{
            males.enqueue(currNode.value)
        }

        currNode=currNode.next
    }

    let currNodeFem = females.first

    while(currNodeFem!==null){
        if(males.first!==null){
            console.log(`${currNodeFem.value} and ${males.first.value} are together!`)
            females.dequeue()
            males.dequeue()
        }

        currNodeFem=currNodeFem.next
    }

    return males //these are the remaining males/ return females to see remaining females

}

console.log(dance(main()))