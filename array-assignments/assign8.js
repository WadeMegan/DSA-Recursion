//merge arrays

const merge = function(arr1,arr2){

    let merged=[]
    let index1 = 0
    let index2 = 0
    let current = 0
    
    //goes through each item 
    while (current<(arr1.length+arr2.length)){
        
        let isArr1Depleted = index1 >= arr1.length
        let isArr2Depleted = index2 >= arr2.length

        /* if arr1 is not depleted AND arr2 is depleted or the current arr1 is less than the current arr2, add current arr1 value to merged array and move to next value in arr1 */
        if(!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))){
            merged[current] = arr1[index1]
            index1++
        }     
        /* else (meaning arr1 is depleted), add current arr2 value to merged array and move to next value in arr2*/   
        else{
            merged[current] = arr2[index2]
            index2++
        }
        current++
    }

    return merged

}

let arr1 = [1, 3, 6, 8, 11]

let arr2 = [2, 3, 5, 8, 9, 10]

console.log(merge(arr1,arr2))