// remove characters

const removeVowels = function(string){

    let storage = []

    for(let i=0;i<string.length;i++){
        if(string[i]!=='a'&& string[i]!== 'e'&& string[i]!=='i'&& string[i]!=='o'&& string[i]!=='u'){
            storage.push(string[i])
        }
    }

    return storage.join("")

}

console.log(removeVowels("Battle of the Vowels: Hawaii vs. Grozny"))
