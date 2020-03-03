//anagram grouping

const HashMap = require('./assign1')

const anagrams = function(arr){

    let sorted = ''

    let hash = new HashMap()

    let anaArr = []

    //iterate over each word, sort it alphabetically, and add it to hash 
    for(let i=0;i<arr.length;i++){
        sorted=arr[i].split('').sort().join('')
        hash.set(arr[i], sorted)
    }
    
    //if hash is empty, do nothing
    if(hash.length===0){
        return
    }
    //if hash is not empty...
    else{
        //iterate over each item in hash
        hash._hashTable.map(item=>{
            //if array already exists for that anagram set, just push word onto existing array
            if(anaArr[item.value]){
                anaArr[item.value].push(item.key)
            }
            //if not array already exists for that anagram set, create one
            else{
                anaArr[item.value] = [ item.key ]
            }
        })

    }

    return anaArr

}

let array = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

console.log(anagrams(array))

/*output is: 
[
  acrs: [ 'cars', 'arcs' ],
  aest: [ 'east', 'teas', 'eats' ],
  acer: [ 'acre', 'race' ]
]
*/
