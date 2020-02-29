//mystery program

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//if the next node in the list is the same as the previous node, then skip the duplicate node and move onto the next one

//logarithmic time because nested for loop. to the power of 2
//depending on what values of current, may never run