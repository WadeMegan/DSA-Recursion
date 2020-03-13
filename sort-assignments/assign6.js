//bucket sort

//somewhat works, but doesn't support repeat numbers and shows empty items

const bucket = function(arr, low, high){
    let buckets = []
    
    for(let i=0;i<arr.length;i++){            
        buckets[arr[i]]=arr[i]
    }
    
    return buckets
}

let arr = [1,0,5,2,6,3]

console.log(bucket(arr,0,6))