//middle of a list

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

    SLL.insertBefore('Athena','Boomer')
    SLL.insertAfter('Hotdog','Helo')
    SLL.insertAt('Kat',3)

    SLL.remove('Tauhida')

    return SLL

}

const middle = function(list){

    let fastPointer = list.head
    let slowPointer = list.head

    while(fastPointer.next!==null){
        fastPointer = fastPointer.next.next //move fast pointer up 2
        slowPointer = slowPointer.next //move slowPointer up 1
    }

    //when fastPointer reaches end of the list, slowPointer will be halfway though
    return slowPointer
}

console.log(middle(main()))

//logarithmic time (i think?) because the running time increases slowly with larger inputs because the fast pointer jumps over two items at a time

