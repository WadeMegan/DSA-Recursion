//implementing quicksort

const swap = function(arr,i,j){
    //console.log('swap ran')
    const tmp = arr[i]
    arr[i]=arr[j]
    arr[j]=arr[i]
}

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

console.log(quickSort([89,30,25,32,72,70,51,42,25]))