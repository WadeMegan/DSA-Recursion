// URLify a string

const urlify = function(string){

    let storage = []

    for(let i=0;i<string.length-1;i++){
        if(string[i]===' '){
            storage.push('%20')
        }
        else{
            storage.push(string[i])
        }
    }

    return storage("")

}

console.log(urlify("tauhida parveen"))
