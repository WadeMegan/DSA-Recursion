const Stack = require('./assign1')

const main = function(){

    const stack = new Stack()

    stack.push('starTrek')
    stack.push('Kirk')
    stack.push('Spock')
    stack.push('McCoy')
    stack.push('Scotty')

    return stack

}

console.log(main())