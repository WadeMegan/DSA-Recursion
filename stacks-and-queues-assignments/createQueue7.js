const Queue = require('./assign7')

const main = function(){

    const starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    return starTrekQ.first.next
}

console.log(main())
