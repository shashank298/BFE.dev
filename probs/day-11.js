//  container with max water - https://leetcode.com/problems/container-with-most-water/
// const input = [1,8,6,2,5,4,8,3,7,8]

function maxWater(arr){
	let left = 0
  let right = arr.length-1
  let maxSum = 0
  
  while(left<right){
  	const currSum = Math.min(arr[left], arr[right]) * (right - left)
    if(currSum>maxSum){
    	maxSum = currSum
    }
    
    if(arr[left] === arr[right]){
    	left++;
      right--;
		}else{
    	arr[left] > arr[right] ? right-- : left++
    }
    
	}
  
  return maxSum
}

//console.log(maxWater(input))

// ==================================================================================================================================
// ==================================================================================================================================

// Set Interval
// const input = [
//     [1, 5],
//     [8, 9]
//   ]
  const newInterval = [2, 7]
  
  function insert(intervals, newInterval) {
    const res = []
    for (let interval of intervals) {
      if ( newInterval[0] > interval[1]) {
        res.push(interval)
      } else if (newInterval[1] < interval[0]) {
        res.push(newInterval)
        newInterval = interval
      } else {
        newInterval[0] = Math.min(interval[0], newInterval[0])
        newInterval[1] = Math.max(interval[1], newInterval[1])
      }
    }
    res.push(newInterval)
    return res
  
  }
  
  
  
//   console.log(insert(input, newInterval))

// ==================================================================================================================================
// ==================================================================================================================================

// Merge intervals
// const input = [
//   [1,3],[2,4],[8,16],[15,18]
// ]

function merge(intervals) {
  const res = []
  let pair = intervals[0]
  
  for(let i=1;i<intervals.length;i++){
  	const currInterval = intervals[i]
    if(pair[1]>currInterval[0]){
    	pair[0] = Math.min(pair[0], currInterval[0])
      pair[1] = Math.max(pair[1], currInterval[1])
    }else{
    	res.push(pair)
      pair = currInterval
		}
  }
  res.push(pair)
  return res;
}
// console.log(merge(input))
