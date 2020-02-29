// Check for palindromes

const Stack = require('./assign1')

const main = function(){

    const stack = new Stack()

    stack.push('starTrek')
    stack.push('Kirk')
    stack.push('Spock')
    stack.push('McCoy')
    stack.push('Scotty')

    return stack

}

function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    
    const stack = new Stack()

    const originalStringArr = []

    for(let i=0;i<s.length;i++){
        stack.push(s[i])
        originalStringArr.push(s[i])
    }

    let currNode = stack.top

    const reversedStringArr = []

    while(currNode !== null){
        reversedStringArr.push(currNode.data)
        currNode = currNode.next
    }

    if(originalStringArr.join(',')===reversedStringArr.join(',')){
        return true
    }
    return false
}

console.log(is_palindrome("dad"))

//O(n) linear time because looping through twice no matter what. the longer the input, the longer it will take