// Are they the same BSTs

const same = function(a,b){

    if(a.length!==b.length){
        return false
    }
    if(a.length===0){
        return true
    }
    if(a[0]!==b[0]){
        return false
    }
    
    let aLeft = []
    let aRight = []
    let bLeft = []
    let bRight = []
    
    for(let i=1;i<a.length;i++){
        if(a[i]<a[0]){
            aLeft.push(a[i])
        }
        else{
            aRight.push(a[i])
        }

        if(b[i]<b[0]){
            bLeft.push(b[i])
        }
        else{
            bRight.push(b[i])
        }
    }

    return same(aLeft,bLeft) && same(aRight,bRight)

}

let a = [3, 5, 4, 6, 1, 0, 2]
let b = [3, 1, 5, 2, 4, 6, 0]

console.log(same(a,b))

//https://www.geeksforgeeks.org/check-if-two-given-key-sequences-construct-same-bsts/