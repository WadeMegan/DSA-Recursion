//remove duplicates

const HashMap = require('./assign1')

const duplicates = function(string){

    const hash = new HashMap()
    
    let containsTF = false

    for (let i=0;i<string.length;){

        console.log(string[i])

        //map through hash table
        hash._hashTable.map(item=>{
            //if hash table already contains the current letter, set containsTF to true
            if(item.key===string[i]){
                containsTF = true
            }
        })

        //if the hash table already contains the letter, remove the letter 
        if(containsTF===true){
            string = string.slice(0,i)+string.slice(i+1)
            //keep index the same value since char was deleted
            i = i
        }
        //if the hash table doesn't already contain the letter, add it to the table
        else{
            hash.set(string[i])
            //move index forward 1
            i++
        }
        
        //reset containtsTF to false
        containsTF = false
    }

    return string

}


console.log(duplicates('google'))