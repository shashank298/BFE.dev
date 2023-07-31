
// findLeaders(input)

// Method 1 
// space: n
// time: n+ 2n => n
function findLongestConsecutiveSubSequence(arr=[]){
    const arrSet = new Set([...arr])
    let maxCount = 0
    let count = 0
    arrSet.forEach((val) => {
      // check if val-1 exists in the set
      // If yes, we can ignore because we that is middle of sequence & so ther is no point of finding it's next consecutive number
      // If no we can look out for it's next num & do it until you find one
      
      if(!arrSet.has(val-1)){
        let currInc = 1
        count = 1
        while(arrSet.has(val+currInc)){
          currInc++;
          count++;
        }
        maxCount = Math.max(maxCount, count)
      }
    })
    
    console.log(maxCount)
  }
  
  // Method 2 - nlogn + n & n size complexity
  function findLongestConsecutiveSubSequence(arr=[]){
    const sortedArr= arr.sort((a,b) => a-b) 
    let lastMin = Number.NEGATIVE_INFINITY
    let maxCount = 0
    let counter = 0
    
    for(let i=0;i<sortedArr.length;i++){
      if(sortedArr[i]-1 === lastMin){
         counter++
         lastMin = sortedArr[i]
      }else if(sortedArr[i]-1 !== lastMin){
        counter = 1
        lastMin = sortedArr[i]
      }
      maxCount = Math.max(counter, maxCount)
    }
    console.log({counter, maxCount})
  }




//   const input = [
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 1, 0, 1],
//     [0, 1, 1, 1]
//   ]
  
  function setMatrixZero(matrix = []) {
    
    // Better Approach -> Iterate through the matrix and use rows & cols array for lookup for rows and columns
    // space - m*n
    // time 2(m*n)

    let rows = [...new Array(matrix.length)].map(() => 1)
    let cols = [...new Array(matrix[0].length)].map(() => 1)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 0) {
            rows[i] = 0
            cols[j] = 0
          }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (rows[i] === 0 || cols[j] === 0) {
           matrix[i][j] = 0
          }
        }
    }


    // Optimal solution - use same better approach but rather than using extra space for rows & cols, use rows & cols as first row & col of matrix
    // rows = [...new Array(matrix.length)].map(() => 1) => matrix[...][0]
    // cols = [...new Array(matrix[0].length)].map(() => 1) => matrix[0][...]
    // space - 1
    // time 2(m*n)

    let col0 = 1
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          if (j == 0) {
            col0 = 0
          } else {
            matrix[0][j] = 0
          }
          matrix[i][0] = 0
        }
      }
    }
  
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0
        }
      }
    }
  
    if (matrix[0][0] === 0) {
      for (let j = 1; j < matrix[0].length; j++) matrix[0][j] = 0
    }
  
    if (col0 === 0) {
      for (let i = 0; i < matrix.length; i++) matrix[i][0] = 0
    }
  
    console.log(matrix)
  }
  


//   const input = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];
  
  function printSpiraTraversal(matrix = []) {
    while (matrix.length) {
      // print top most row
  
      if (matrix.length) {
        const firstRow = matrix.shift();
        while (firstRow.length) console.log(firstRow.shift());
      }
  
      // print right col
      for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].pop());
      }
  
      // print bottom row
      if (matrix.length) {
        const lastRow = matrix.pop();
        while (lastRow.length) console.log(lastRow.pop());
      }
  
      // print left col
      for (let i = matrix.length - 1; i >= 0; i--) {
        console.log(matrix[i].shift());
      }
    }
  }
  
//   printSpiraTraversal(input);