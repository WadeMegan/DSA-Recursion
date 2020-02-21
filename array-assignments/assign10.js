// products - find the products of every other number except the number at the index

const products=function(arr){

    const storage = []

    //end if array is less than three because need at least two numbers (other than index value) to get a product
    if(arr.length<3){
        console.log('array must be greater than 2')
        return
    }

    for (let i=0;i<arr.length;i++){
        let product = 1
        for (let j=0;j<arr.length;j++){
            if (j !== i){
                product = product*arr[j]
            }
        }
        storage.push(product)
    }

    return storage
}

console.log(products([1,3,9,4]))