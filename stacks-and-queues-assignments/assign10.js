//the ophidian bank

const Queue = require('./assign6')

const main = function(){

    const q = new Queue()

    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    q.enqueue(5)
    q.enqueue(6)
    q.enqueue(7)
    q.enqueue(8)
    q.enqueue(9)
    q.enqueue(10)

    return q
}

const bank = function(q){

    let rounds = 0

    let newCustCount=0

    //repeat for as many rounds as you want
    while(rounds<25){

        //generate random # bw 1 and 4 - 4 will happen about 25% of time
        let odds = Math.floor(Math.random() * 4) + 1 

        if(odds !== 4){
            q.dequeue()
        }
        else{
            let returnCust = q.first.value
            q.dequeue()
            q.enqueue(returnCust)
        }

        newCustCount++ //add a new customer each time
        q.enqueue(`new cust ${newCustCount}`)
        rounds++

    }

    //display at the end
    let currNode = q.first

    while(currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
    }

}

console.log(bank(main()))


