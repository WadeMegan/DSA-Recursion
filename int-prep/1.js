// find the maximum value in an array 

function max(arr){
    let max = arr[0]

    for(let i=1;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }

    return max
}

let arr = [1,5,4,3,2,7,0]

console.log(max(arr)) // should return 7 

//time complexity - linear O(n) because has to go through every item. time increases proportionally to input size