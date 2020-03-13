//implementing merge sort

function merge(left, right, array) {
    //console.log('merge ran')
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    console.log('merge',left,right,array)
    return array;
};

function mergeSort(array) {
    //console.log('ran')
    if (array.length <= 1) {
        //console.log('RAN if statement',array)
        return array;
    }

    const middle = Math.floor(array.length / 2);

    let left = array.slice(0, middle);
    console.log('left',left)
    let right = array.slice(middle, array.length);
    console.log('right',right)
    
    left = mergeSort(left);
    console.log('leftRecurse',left)
    right = mergeSort(right);
    console.log('rightRecurse',right)


    //console.log('info',left,right,array)
    return merge(left, right, array);
};

console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))