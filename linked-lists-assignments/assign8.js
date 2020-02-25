//cycle in a list

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

const hasCycle = function(list){

    let slowPointer = list
    let fastPointer = list

    while(fastPointer&&fastPointer.next){
        //move the slow pointer by one and the fast pointer by two
        slowPointer=slowPointer.next
        fastPointer=fastPointer.next

        //if at any time the slow pointer and fast pointer are equal, the list contains a cycle
        if(slowPointer===fastPointer){
            return true
        }
    }

    //return false if cycle is never found
    return false

}

console.log(hasCycle(main()))

//O(n) time