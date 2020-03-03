//any permutation of a palindrome

const HashMap = require('./assign1')

const palindrome = function(string){

    let hash = new HashMap()
    let charCount = 0
    let duplicatesNum = Math.floor(string.length/2)
    
    for(let i=0;i<string.length;i++){
        
        //console.log(hash.length)
        //console.log(string[i])
        if(hash.length===0){
            hash.set(string[i])
        }
        else{

            //map through hash table
            hash._hashTable.map(item=>{
                //console.log(item)
                //if hash table already contains the current letter, add 1 to charCount
                if(item.key===string[i]){
                    charCount += 1
                    //console.log("charCount+1")
                    //console.log(item.key)
                }
                //else, add to hash map
                else{
                    //console.log('add')
                    hash.set(string[i])
                }
            })

        }
    }

    console.log(hash)
    console.log(charCount)
    if(charCount === duplicatesNum || charCount === duplicatesNum+1){
        return true
    }
    else{
        return false
    }
}

console.log(palindrome('blachwiididji'))