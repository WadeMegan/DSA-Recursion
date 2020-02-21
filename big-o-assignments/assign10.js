function isWhat(n) {
    
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isWhat())

//dont quite understand what this function is actually doing

/* If the number is less than two OR is not an integer (n%1 != 0), then it returns false. Else, it performs a loop for 2-n and if the number is divisible by i, it returns false. Otherwise, returns true.*/

/* Should be logarithmic time because path is uncertain and depends on the input n. Will either end immediately or go into for loop depending on what n is. Logarithmic time whenever the path is uncertain. */ 
