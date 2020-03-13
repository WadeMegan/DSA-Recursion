//implementing quicksort

var items = [3,9,1,20,17,24,22,14];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            //console.log(i)
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    console.log(items)
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        console.log(index)
        //console.log(items)
        if (left < index - 1) { //more elements on the left side of the pivot
            console.log('run left')
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            console.log('run right')
            quickSort(items, index, right);
        }
    }
    //console.log(items)
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [ 25, 25, 30, 32, 42, 51, 70, 72, 89 ]
