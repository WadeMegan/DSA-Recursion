// quicksort

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex]
    items[leftIndex]=items[rightIndex]
    items[rightIndex]=temp
}

function partition(items, left, right){
    let pivot = items[Math.floor((right+left)/2)]
    let i = left
    let j = right

    while(i<=j){
        while(items[i]<pivot){
            i++
        }
        while(items[j]>pivot){
            j--
        }
        if(i<=j){
            swap(items, i, j)
            i++
            j--
        }
    }
    return i
}

function quickSort(items, left, right){
    let index

    if(items.length>1){
        index = partition(items, left, right)

        if(left<index-1){
            quickSort(items, left, index -1)
        }

        if(index<right){
            quickSort(items, index, right)
        }
    }

    return items
}


//time complexity: in best and average case, is O(nlog(n)), but in worst case is O(n^2)

//why use quicksort over merge sort?
//quicksort requires little space and is more cache-efficient because it is an in-place sorting algorithm, unlike mergesort. merge sort requires a temporary array to merge the sorted array 