const mazeSolve = function(maze,i,j){
    
   if(maze[i][j]==='e'){
       let solved = `We found the maze at column ${j} and row ${i}`
       return solved
   }
   //down
   if(maze[i+1] && maze[i+1][j]!=='*'){
       console.log('D')
       mazeSolve(maze,i+1,j)
   }
   //right
   if(maze[i][j+1] && maze[i][j+1]!=='*'){
       console.log('R')
       mazeSolve(maze,i,j+1)
   }

}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


console.log(mazeSolve(mySmallMaze,0,0))