//count the number of words in a string that are palindromes

function palindrome(string){

    let arr = string.split(" ")
    
    let result = ""
    let palCount = 0

    //loop through array of words
    for(let i=0; i<arr.length; i++){

        let forwardWord = arr[i].toLowerCase()
        let reverseWord = ""

        //break word up into letters
        let forwardWordArr = forwardWord.split('')
        
        //any word shorter than 3 letters cannot be a palindrome
        if(forwardWord.length>=3){
            
            //loop through letters backwards to create reverse word
            for(let i=forwardWordArr.length-1; i>=0; i--){
                reverseWord = reverseWord + `${forwardWordArr[i]}`
            }

            //if reverse word and palindrome are the same, add to result string
            if(reverseWord == forwardWord){
                palCount++
                result = result + `${arr[i]}, `
            }
        }
        
    }

    return result + `${palCount} Palindromes` 
}

let string = "Dad gave mom a Tesla as a racecar" 

console.log(palindrome(string))

// best case is linear O(n) time complexity if all words are shorter than 3 characters - because will only have to loop through array of words once

// logarithmic because second loop is an if condition (polynomial if no if condition)