//create a stack class

//Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data,next){
        this.data=data
        this.next=next
    }
}

/* 
Stack has two primary functions: 
    -push() - place data onto the top of a stack
    -pop() - removes data from the top of the stack
*/

class Stack {
    constructor(){
        this.top=null
    }

    //O(1) time complexity
    push(data){
        //if the stack is empty, then the node will be the top of the stack
        if(this.top===null){
            this.top=new _Node(data,null)
            return this.top
        }
        //if the stack already has something, then create a new node, add data to the new node, and have the pointer point to the top 
        const node = new _Node(data,this.top)
        this.top=node
    }

    //O(1) time complexity
    pop(){
        //in order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes top of the stack
        const node =this.top
        this.top=node.next
        return node.data
    }

}

module.exports = Stack

