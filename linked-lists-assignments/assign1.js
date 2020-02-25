//create a linked list class with insertFirst, insertLast, remove, find

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null //head indicates beginning of list
    }

    insertFirst(item){ //O(1) operation
        this.head=new _Node(item, this.head)
        //console.log('running')
        //console.log(this.head)
    }

    insertLast(item){ //O(n) operation
        if(this.head===null){
            this.insertFirst(item)
        }
        else{
            let tempNode=this.head
            while (tempNode.next !== null){
                tempNode = tempNode.next
            }
            tempNode.next=new _Node(item,null)
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
            console.log('empty list')
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
                console.log('not in list')
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
                console.log('keep looking')
            }
        }
        // added this if statement because it didnt appear to actually be returning any values
        if(currNode.value === item){
            //return currNode.value
            console.log(currNode)
        }
        // Found it
        return currNode;
    }

    remove(item){ //best case is O(1) operation and avg/worst case is O(n) operation 
        //if the list is empty 
        if(!this.head){
            return null
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value===item){
            this.head = this.head.next
            return
        }
        //start at the head
        let currNode = this.head
        //keep track of previous
        let previousNode =this.head

        while((currNode!==null)&&(currNode.value!==item)){
            //save the previous node
            previousNode=currNode
            currNode=currNode.next
        }
        if(currNode===null){
            console.log('Item not found')
            return
        }
        previousNode.next=currNode.next
    }

    insertBefore(newItem, oldItem){
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
            console.log('empty list')
        }
        // Check for the item 
        while (currNode.next.value !== oldItem) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
                console.log('not in list')
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // added this if statement because it didnt appear to actually be returning any values
        if(currNode.next.value === oldItem){
            //return currNode.value
            let oldNext = currNode.next
            //replace currNode.next with new node
            currNode.next = new _Node(newItem,oldNext)
        }
        // Found it
        return currNode;
    }

    insertAfter(newItem,oldItem){
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
            console.log('empty list')
        }
        // Check for the item 
        while (currNode.value !== oldItem) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
                console.log('not in list')
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // added this if statement because it didnt appear to actually be returning any values
        if(currNode.value === oldItem){
            //return currNode.value
            let oldNext = currNode.next
            //replace currNode.next with new node
            currNode.next = new _Node(newItem,oldNext)
        }
        // Found it
        return currNode;
    }

    insertAt(item, position){
        // Start at the head
        let currNode = this.head;
        let counter = 1
        // If the list is empty
        if (!this.head) {
            return null;
            //console.log('empty list')
        }
        
        while (counter !== position-1) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
                //console.log('not in list')
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
                counter++
            }
        }
        // added this if statement because it didnt appear to actually be returning any values
        if(counter===position-1){
            //return currNode.value
            let oldNext = currNode.next
            //replace currNode.next with new node
            currNode.next = new _Node(item,oldNext)
        }
        // Found it
        return currNode;
    }

}

module.exports = LinkedList