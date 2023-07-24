// Count Maximum Consecutive One’s in the array

function countMaxConsecutiveOnes(arr = [1, 1, 0, 1, 1, 1]) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
}

// console.log(countMaxConsecutiveOnes())

//Find The Single Element
// Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

function getSingleElement(arr = [4, 1, 2, 1, 2]) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (obj[key]) {
      delete obj[key];
    } else {
      obj[key] = 1;
    }
  }

  return Object.keys(obj)?.[0] ?? -1;
}

// console.log(getSingleElement())

// Longest Subarray with given Sum K(Positives)
// Problem Statement: Given an array and a sum k, we need to print

function getLongestSubArray(
  arr = [2, 1, 5, 1, 1,0, 1, 1,1,1,1,1,1,1,1,1],
  sum = 10
) {
  let tempSum = arr[0];
  let arrLen = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {

    while (tempSum > sum && left <= right) {
      tempSum = tempSum - arr[left];
      left++;
    }

    if (tempSum === sum) {
      arrLen = Math.max(arrLen, right - left + 1);
    }


    right++;

    if (right < arr.length) tempSum += arr[right];
   
  }

  return arrLen;
}

// console.log(getLongestSubArray());

// const input = [2,0,2,1,1,0]

function swapElements(index1, index2, arr){
	const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
	return arr
}

function sortArr(arr){

	let left = 0
  let right = arr.length-1
  let pointer = 0
  
  while(pointer<=right){
  
  	if(arr[pointer] === 0){
    	arr = swapElements(left, pointer, arr)
      left++;
      pointer++;
		}else if(arr[pointer] === 1){
      pointer++;
		}else{
    	arr = swapElements(right, pointer, arr)
      right--;
		}
    console.log(arr,left,pointer,right)
  }
  
  return arr
}
// console.log(sortArr(input))

// const input1 = [2,2,1,1,1,2,2]

function findMajorityEl(arr=[]){

	let currentEl
  let count=0
  for(let i=0;i<arr.length;i++){
  	if(count === 0){
    	currentEl = arr[i]
      count = 1
    }else if(arr[i] === currentEl){
    	count++
    }else{
    	count--;
		}
    console.log({count, currentEl})
  }
  return currentEl
}
// console.log(findMajorityEl(input1))

// const input = [-1, -4, -5]

function MaxSubarray(arr=[]){
	let sum=0;
  let maxSum = Number.NEGATIVE_INFINITY
  for(let i=0;i<arr.length;i++){
  	sum = sum + arr[i]
    
    if(sum < 0){
    		if(arr[i] >= sum){
        	maxSum = Math.max(maxSum,sum)
        }
      	sum=0
    }else{
    	maxSum = Math.max(maxSum,sum)
		} 
	}
  
  return maxSum;
  
}

// console.log(MaxSubarray(input))