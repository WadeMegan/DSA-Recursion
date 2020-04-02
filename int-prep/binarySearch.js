// binary search - only works on sorted arrays; divides the array in half each time

function binarySearch (array, value, start, end){
    var start = start === undefined ? 0 : start
    var end = end === undefined ? array.length : end

    if(start>=end){
        return -1
    }

    let index = Math.floor((start+end)/2)
    let item = array[index]

    if(item = value){
        return index
    }
    else if(item>value){
        return binarySearch(array, value, start, index-1)
    }
    else if(item<value){
        return binarySearch(array, value, index+1, end)
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(array, 0, 0, array.length))

//best case is O(1) when the item is in the middle of the array 
//worst and avg cases are O(log(n)) since you cut the search area in half each time




