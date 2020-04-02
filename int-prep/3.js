// count the number of word occurences in a string

function words(string){

    //prepare string by making lowercase, removing punctuation, and making array

    let lowerString = string.toLowerCase()

    for(let i=0; i<lowerString.length; i++){
        let charCode = lowerString.charCodeAt(i)
        //console.log(lowerString[i],charCode)

        //removes any punctuation 
        if((charCode<97 || charCode>122) && charCode!==32){
            //console.log(lowerString[i])
            lowerString = lowerString.replace(lowerString[i],'')
        }
    }

    let arr = lowerString.split(' ')

    //loop through array of words...

    let words = {}

    for(let i=0; i<arr.length; i++){
        
        //if word is not in object, add it with count 1
        if(!(arr[i] in words)){
            words[arr[i]] = 1
        }
        //if words is in object, increase count by 1
        else{
            words[arr[i]]++
        }
    }

    //create empty string
    let result = ''

    //loop through object and add result for word to the result string
    for (let word in words){
        result = result + `${word}=${words[word]}, `
    }

    //console.log(string)
    return result

}

let string = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

console.log(words(string))

// time complexity is O(n) - need to loop through the string once, then the array once, then the hash map once