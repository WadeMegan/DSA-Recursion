//find the most common letter in a string

function common(s){

    if(s.length===0){
        return null
    }

    s = s.toLowerCase()

    const characters = {}

    for(let i=0; i<s.length; i++){
        
        let character = s.charAt(i)
        let characterCode = s.charCodeAt(i)

        if(characterCode <97 || characterCode >122){
            //filter all non a-z characters 
            continue
        }

        if(!(character in characters)){
            characters[character]=1
        }
        else{
            characters[character]++
        }

    }

    let mostCommonCharacter = null
    let maxOccurrences = 0

    for(let character in characters){
        const count = characters[character]
        
        if(count>maxOccurrences){
            mostCommonCharacter=character
            maxOccurrences = count
        }
    }
        
    return mostCommonCharacter

}

let string = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

console.log(common(string)) //should return e

//time complexity is O(n) - need to loop through the string once and then the hash map once
