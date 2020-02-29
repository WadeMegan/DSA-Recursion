//find the max sum in the array

//sort (without built in methods) and then take the two highest instead of looping twice

const maxSum = function(arr){

    let highest1 = arr[0] //placeholder 
    let highest1Index = 0 //placeholder
    let highest2 = arr[0] //placeholder

    //first loop through array to find greatest number
    for(let i=0;i<arr.length;i++){
        /* if current value is greater than highest1... */
        if(arr[i]>highest1){
            highest1=arr[i]
            highest1Index=i
        }
        /* if current value is less than highest, set the highest2 to current value. done because we want the highest 2 not to be the highest value */
        else{
            highest2=arr[i]
        }

    }

    //second loop through array to find second greatest number
    for(let i=0;i<arr.length;i++){
        // only if the current index is not the index of the highest value
        if(i !== highest1Index){
            if(arr[i]>highest2){
                highest2=arr[i]
            }
        }
    }

    let greatestSum = highest1+highest2

    return greatestSum

}

console.log(maxSum([2,3,4,5,10,2,20])) //result should be 30