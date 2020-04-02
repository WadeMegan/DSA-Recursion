//nth triangular number

function triangle(n){

    if(n===1){
        return 1
    }   
    else{
        return n + triangle(n-1)
    }

}

console.log(triangle(5))