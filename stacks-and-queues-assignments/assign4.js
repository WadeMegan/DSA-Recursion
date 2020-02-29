//matching parentheses in an expression

const Stack = require('./assign1')

const parenth = function(str){

    const contain = new Stack()

    for(let i=0;i<str.length;i++){
        
        if(str[i]==='('){
            contain.push(str[i])
        }
        
        if(str[i]===')'){
            if(contain.top&&contain.top.data==='('){
                contain.pop()
            }
            else{
                return 'You are missing a ('
            }
        }
    }

    if(!contain.top){
        return 'All good!'
    }
    else{
        return 'You are missing a )'
    }



    return contain

}

console.log(parenth('((()))'))

