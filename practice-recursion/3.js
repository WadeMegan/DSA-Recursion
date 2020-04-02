//reverse string

function reverse(string){

    if(string===''){
        return ''
    }
    else{ 
        return string[string.length-1] + reverse(string.substring(0,string.length-1))
    }
    
}

console.log(reverse('hello'))