//Useful methods for a stack

const Stack = require('./assign1')

const main = function(){

    const stack = new Stack()

    stack.push('starTrek')
    stack.push('Kirk')
    stack.push('Spock')
    stack.push('Scotty')

    return stack

}

const peek = function(stack){
    
    //if the stack is empty 
    if (!stack.top){
        return 
        console.log('empty stack')
    }
    return stack.top
}

//console.log(peek(main()))

const isEmpty = function(stack){
    //if the stack is empty 
    if (!stack.top){
        return true
    }
    return false
}

//console.log(isEmpty(main()))

const display = function(stack){
    let currNode = stack.top
    //if the stack is empty 
    if (!stack.top){
        return 
        console.log('empty stack')
    }

    while(currNode !== null){
        console.log(currNode.data)
        currNode = currNode.next
    }
}

//console.log(display(main()))