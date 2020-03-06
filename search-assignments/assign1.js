//binary search

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

let arr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] //search for 8
/*
    searches through: 
        [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
        [3, 5, 6, 8]
        [6, 8]
        [8]

*/

let arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] //search for 16
/*
    searches through:
        [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
                        [12, 14, 15, 17, 18]
                                    [17, 18]
*/

console.log(binarySearch(arr1,16,0,9))

