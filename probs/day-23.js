
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