//find the mode and the frequency of the mode

function mode(list){

    let arr = list.split(', ')

    let numbers = {}

    for (let i=0; i<arr.length; i++){
    
        if(!(arr[i] in numbers)){
            numbers[arr[i]]=1
        }
        else{
            numbers[arr[i]]++
        }
    }

    let modeNumber = null

    for(let number in numbers){
        
        console.log(number, numbers[number])

        if(!modeNumber){
            modeNumber = number
        }
        else{
            if(numbers[number]>numbers[modeNumber]){
                modeNumber = number
            }
        }
    }
    
    return `Mode = ${modeNumber}, Frequency of mode = ${numbers[modeNumber]}`

}

let list= '1, 2, 3, 6, 10, 3, 5, 6, 3, 3'

console.log(mode(list))

//time complexity is linear O(n) - have to loop through array once and then hash map once

