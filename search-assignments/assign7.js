// max profit

const profit = function(arr){

    let buy = arr[0]
    let sell = arr[1]
    let i = 0
    let j = 1

    while(i<arr.length-1){

        if(arr[i]<buy){
            buy = arr[i]
        }

        if(arr[j]>sell){
            sell = arr[j]
        }
        
        i++
        j++
    }

    return sell-buy

}

console.log(profit([128,97,121,123,98,97,105]))