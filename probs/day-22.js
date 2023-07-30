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


function maxSubarraySum(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
  let sum = 0;

  for (let i = 0; i < n; i++) {
      sum += arr[i];

      if (sum > maxi) {
          maxi = sum;
      }

      // If sum < 0: discard the sum calculated
      if (sum < 0) {
          sum = 0;
      }
  }

  // To consider the sum of the empty subarray
  // uncomment the following check:

  //if (maxi < 0) maxi = 0;

  return maxi;
}

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const n = arr.length;
// const maxSum = maxSubarraySum(arr, n);
// console.log("The maximum subarray sum is: " + maxSum);

function buyAndSellStocks(arr = []) {
  let maxProfit = 0
  let minValue = Number.POSITIVE_INFINITY
  let minIdx = null
  let maxIdx = null

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < minValue) {
      minValue = arr[i]
      minIdx = i
    }

    const currProfit = arr[i] - minValue

    if (currProfit > maxProfit) {
      maxProfit = currProfit
      maxIdx = i
    }

  }

  console.log({
    max: arr[maxIdx],
    min: arr[minIdx]
  })
}

// const input = [1,2,-3,-4]

function reArrangeOrder(arr=[]){
	if(arr.length<4) return arr
	let left = 0
  let right= Math.floor(arr.length/2);
  const temp = []
  
 for(let i=0;i<arr.length/2;i++){
 		temp.push(arr[left+i])
 		temp.push(arr[right+i])
	}
  
  return temp;  
}

// console.log(reArrangeOrder(input))

// Problem Statement:** Given an array arr[] of integers, you need to return the product of given array elements except including the element itself.
function productOfArray(arr=[]){
  let prefix=[];
  let product=[];
  
  prefix[0]=1; // since first element can have no prefix
  for(let i=1;i<arr.length;i++)
  {
      prefix[i]=prefix[i-1]*arr[i-1];
  }
  
  let suffixProduct=1;
  // Building Product array and maintaining suffix product
  for(let i=arr.length-1;i>=0;i--)
  {
      product[i]=suffixProduct*prefix[i];
      suffixProduct*=arr[i];
  }
  console.log(product)
}


// const input = [1,5,6,4,3,2,1]

// 1,2,3
// 1,3,2
// 2,1,3
// 2,3,1
// 3,1,2
// 3,2,1

// 1. Find largest prefix match (find el[ind] < el[ind+1])
// 2. Find the least among the rest of elements
// 3. sort the rest in ascending 

function findNextPermutation(arr){
	let index = -1
  // step1 
	for(let i=arr.length-2;i>=0;i--){
  	if(arr[i] < arr[i+1]){
    	index = i;
      break;
    }
  }
  
  if(index === -1){
  	return;
	}
  
  // step2
  for(let i=arr.length-1;i>index;i--){
  	if(arr[i] > arr[index]){
    	const temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }
  
  // step3
  arr.splice(index+1, arr.length-index-1, ...arr.slice(index+1).reverse())
  
  return arr
}

// console.log(findNextPermutation(input))

// const input = [10, 22, 12, 3, 0, 6]

function findLeaders(arr=[]){
	const size = arr.length
	let currMax = arr[size-1]
  console.log(currMax)
  for(let i=size-2;i>=0;i--){
  	if(arr[i] > currMax){
      currMax = arr[i]
      console.log(currMax)
    }
  }
}
