//reverse a list

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

//iterative solution
const reverse = function(list){

    let previous = null
    let current = list.head
    let next = null
    
    while(current!==null){
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous //this is the new head

}

console.log(reverse(main()))

//O(n) time