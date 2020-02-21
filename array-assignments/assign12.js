// string rotation

const rotationCheck = function(str1,str2){

    //splits str1 into an array
    let str1Arr = str1.split('')

    //iterates through array and with each iteration, puts first letter at end, going through every possible rotation
    for(let i=0;i<str1Arr.length;i++){
        str1Arr.push(str1[i])
        str1Arr.shift()
        //checks if the rotation equals str2
        if(str1Arr.join("") === str2){
            return true
        }
    }

    return false

}

console.log(rotationCheck("amazon","azonam"))