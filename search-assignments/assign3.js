//find a book

//dont really get how dewey decimal works

const book = function(library, dewey, title){

    let start = 0
    let end = library.length

    //do a binary search through the library to find the correct dewey decimal section
    while(start<end){
        let middle = Math.floor((start+end)/2)

        if(libary[middle].dewey == dewey){
            //once the dewey decimal section has been found, do a linear search (to the left and right of the middle) to find the book title
            if(library[middle].title==title){
                return library[middle]
            }
            for(let i=middle+1; library[i].dewey==dewey;i++){
                if(library[i].title==title){
                    return library[i]
                }
            }
            for(let i=middle-1; library[i].dewey==dewey;i--){
                if(library[i].title==title){
                    return library[i]
                }
            }
            //book title not found
            return
        }
        if(library[middle].dewey<dewey){
            start = middle+1
        }
        else{
            end = middle-1
        }
    }
    //dewey decimal not found
    return
}
