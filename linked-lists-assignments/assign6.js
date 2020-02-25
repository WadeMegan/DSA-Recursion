//3rd from the end

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

const fromEnd = function(list){

    let previous = null
    let current = list.head

    while (current.next.next!==null){
        previous = current
        current = current.next
    }

    return previous

}

console.log(fromEnd(main()))

//O(n) time