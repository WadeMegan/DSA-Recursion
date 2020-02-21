//2d array 

const array2D = function(arr){

    let iRows = []
    let jColumns = []

    // first iterates through the rows i
    for(let i=0;i<arr.length;i++){
        //then within each row, iterates through the columns j
        for(let j=0;j<arr[i].length;j++){
            //if indivual item is 0, pushes the row # i to iRows and the column # j to jColumns
            if(arr[i][j]===0){
                iRows.push(i)
                jColumns.push(j)
            }
        }
    }

    //this iteration though each individual value item is responsible for changing the value to 0 if necessary 
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            //if the item is in the iRows or jColumns array, it changes the value of the item to 0
            if(iRows.includes(i)||jColumns.includes(j)){
                arr[i][j]=0
            }
        }
    }

    return arr

}

let array = [[1,0,1,1,0],
             [0,1,1,1,0],
             [1,1,1,1,1],
             [1,0,1,1,1],
             [1,1,1,1,1]];

console.log(array2D(array))