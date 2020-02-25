//sorting a list

const LinkedList = require('./assign1')

const main = function(){

    const SLL = new LinkedList()

    SLL.insertFirst(3)
    SLL.insertLast(2)
    SLL.insertLast(5)
    SLL.insertLast(7)
    SLL.insertLast(1)

    return SLL

}

const sort = function(list){

    let current = list.head
    let index = null
    let temp = null

    //empty list
    if(!list.head){
        return
    }

    while(current !== null){
        //index will point to node next to current
        index=current.next

        while(index!==null){
            //if current node's value is > index
            if(current.value>index.value){
                temp=current.value
                current.value = index.value
                index.value = temp
            }
            index =index.next
        }

        current=current.next
    }

    return list
}

console.log(sort(main()))

//O(n) time