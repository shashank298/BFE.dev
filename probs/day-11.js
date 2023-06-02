//  container with max water - https://leetcode.com/problems/container-with-most-water/
const input = [1,8,6,2,5,4,8,3,7,8]

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