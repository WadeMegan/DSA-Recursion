//implement a queue using two stacks

const Stack = require('./assign1')

class _Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

let stack1 = new Stack()
let stack2 = new Stack()

class Queue {
    //constructor contains 1st and last nodes indicating the beginning and ending of the queue
    constructor(){
        this.first=nul
        this.last=null
    }

    enqueue(data){ //O(1) time complexity
        stack1.push(data)
    }

    //push all elements from stack1 to stack2, reversing the order and then popping from stack 2
    dequeue(){ //O(1) time complexity
        if(stack2.length===0){
            if(stack1.length===0){
                return 'queue is empty'
            }
            while(stack1.length>0){
                let p=stack1.pop()
                stack2.push(p)
            }
        }
        return stack2.pop()
    }
}

module.exports = Queue