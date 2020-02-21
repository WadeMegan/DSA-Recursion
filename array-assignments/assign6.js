// Filtering an array

const filter = function(array){
    let newArray = []
    //better way to do this without creating a new array?
    
    for(let i=0;i<array.length;i++){
        if(array[i]>5){
            newArray.push(array[i])
        }
    }
    
    return newArray
}

console.log(filter([6,7,8,2,6,3,9]))

