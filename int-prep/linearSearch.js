// linear search - look through an array 1 by 1 until you find what you're looking for

function indexOf(array, value){
    for (let i=0;i<array.length;i++){
        if(array[i]==value){
            return i
        }
    }
    return -1
}

let array = [1,2,4,5,6,8]
console.log(indexOf(array, 5)) //should return 3

//best case is O(1) when the value is at the start of the array
//worst case is O(n) when you have to search the entire array to find the key doesn't exist
//avg case is O(n) which takes place when the item is in the center of the array