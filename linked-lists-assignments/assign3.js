//supplemental functions for a linked list

const LinkedList = require('./assign1')

const main = function(){

    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    //SLL.find('Apollo')

    SLL.insertBefore('Athena','Boomer')
    SLL.insertAfter('Hotdog','Helo')
    SLL.insertAt('Kat',3)

    SLL.remove('Tauhida')

    return SLL

}

const display = function(linkedList){
    // Start at the head
    let currNode = linkedList.head
    // If the list is empty
    if (!linkedList.head) {
        return null;
        console.log('empty list')
    }
    while (currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
    }
}

console.log(display(main()))

const size = function(linkedList){ //O(n) time
    // Start at the head
    let currNode = linkedList.head
    let counter = 0
    // If the list is empty
    if (!linkedList.head) {
        return null;
        console.log('empty list')
    }
    while (currNode !== null){
        counter++
        currNode = currNode.next
    }
    return counter
}

//console.log(size(main()))

const isEmpty = function(linkedList){ //O(1) time
    if (!linkedList.head) {
        return true;
    }
    else{
        return false
    }
}

//console.log(isEmpty(main()))

const findPrevious = function(linkedList,item){ //O(n) time
    // Start at the head
    let currNode = linkedList.head
    // If the list is empty
    if (!linkedList.head) {
        return null;
        console.log('empty list')
    }
    while (currNode !== null){
        if(currNode.next.value===item){
            return currNode
        }
        else{
            currNode = currNode.next
        }
    }
}

//console.log(findPrevious(main(),'Starbuck'))

const findLast = function(linkedList){ //O(n) time
    // Start at the head
    let currNode = linkedList.head
    // If the list is empty
    if (!linkedList.head) {
        return null;
        console.log('empty list')
    }
    while (currNode !== null){
        if(currNode.next===null){
            return currNode
        }
        else{
            currNode = currNode.next
        }
    }
}

//console.log(findLast(main()))