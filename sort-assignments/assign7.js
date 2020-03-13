//sort in place

const sort = function(arr){

    let prev1 = arr[0-1]
    let prev2 
    let current

    for(let i=1;i<arr.length;i++){
        current = arr[i]
        console.log('current', current)
        prev2 = arr[i-1]
        console.log('previous',prev2)
        prev1 = arr[i-2]
        if(current < prev2){
            console.log('swap')
            arr[i-1] = current
            arr[i] = prev2
            if(prev2>prev1){
                sort(arr)
            }
        }
    }

    return arr

}

let arr = [1,0,5,2,6,3,3,20,50,25]

console.log(sort(arr))