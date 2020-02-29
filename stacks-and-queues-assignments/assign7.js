//creating a queue class using a doubly linked list

//create a node containing the data and a reference to the next item
class _Node {
    constructor(value){
        this.value=value
        this.next=null
        this.previous=null //adds previous
    }
}

class Queue {
    //constructor contains 1st and last nodes indicating the beginning and ending of the queue
    constructor(){
        this.first=null
        this.last=null
    }

    //adds data to the end of the queue
    enqueue(data){ //O(1) time complexity
        const node = new _Node(data)

        if(this.first === null){
            this.first=node
        }

        if(this.last){
            node.previous=this.last //sets previous to last
            this.last.next=node
        }
        //make the new node the last item on the queue
        this.last=node
    }

    //removes data from the beginning of the queue
    dequeue(){ //O(1) time complexity
        //if the queue is empty, there is nothing to return 
        if(this.first===null){
            return
        }
        const node=this.first
        this.first=this.first.next
        //if this is the last item in the queue
        if(node===this.last){
            this.last=null
        }
        return node.value
    }
}

module.exports = Queue