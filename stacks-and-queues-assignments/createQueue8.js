const Queue = require('./assign8')

const main = function(){

    const starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
    starTrekQ.dequeue()

    return starTrekQ
}

console.log(main())
