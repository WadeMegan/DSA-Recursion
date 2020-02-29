//sort stack 

const Stack = require('./assign1')

const main = function(){

    const stack = new Stack()

    stack.push('2')
    stack.push('8')
    stack.push('5')
    stack.push('3')

    return stack

}

const sort = function(stack){

    let sortedStack = new Stack()

    while(stack.top !== null){
        //pop item from the original stack
        let temp = stack.pop()
        
        //while there is an item in the sortedStack AND the popped item is greater than the top item in the sorted stack, push 
        while(sortedStack.top && sortedStack.top.data < temp){
            stack.push(sortedStack.pop())
        }
        //push temp onto sorted stack
        sortedStack.push(temp)
    }

    return sortedStack

}

console.log(sort(main()))