// const target = 11
// const arr = [1,2,3,4,8,1,7,3,4]

// 1Q. Find sum of elements in arr is equal to target
// 2Q. Find the indexes of those two

// Approach 1
// store key & value in obj
// on every iteration check whether the diff exist in the obj

// Approach 2
// Sort the arr & store it's indexes before sorting
// Use two pointers left & right and check the sum of left+right == target
// If sum < target move left index
// else move right index
// If left == right return false

function isSumExists(arr, target) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const diff = target - key;
    if (res[diff]) {
      return [diff, key];
    }
    res[key] = i;
  }
  return -1;
}

// console.log(isSumExists(arr, target))

// Sort 0's, 1's & 2's
// Dutch national flag algo
// Use 3 pointers, Iterate over the array and make sure all 0's are behind low index & all 2's are under high index
// const input = [1,0,1,2,0,1,2,1,2,0,0,0,1]

function sortArray(arr) {
  let low = 0;
  let mid = 0;
  let max = arr.length - 1;

  while (mid <= max) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      [arr[max], arr[mid]] = [arr[mid], arr[max]];
      max--;
    } else {
      mid++;
    }
  }
  console.log(arr);
}

// sortArray(input)

// Find majority element (i.e element whose occurrence is >n/2, where n is size of input )
// Moore's Voting Algorithm, Intuition is that we keep on Inc/Dec the count and when our count will be 0, our next element will be the currEl
// const input = [0, 1, 0]

function findMajorityElement(arr) {
  let count = 0;
  let currEl;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      currEl = arr[i];
      count = 1;
      continue;
    }

    if (currEl === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  console.log(currEl);
}

// findMajorityElement(input)

// Kadane's Algorithm
// keep adding element to currMax
// If currMax is <0 then update the currSum value to 0
// because adding our negative currSum to anything will further dec it's value 

// const input = [1, 2, 7, -4, 3, 2, -10, 9, 1]

function findMaxSubArray(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let currMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currMax += arr[i];
    if (currMax < 0) {
      max = Math.max(currMax, max);
      currMax = 0;
    } else {
      max = Math.max(currMax, max);
    }
  }

  console.log(max);
}

// findMaxSubArray(input)

// Rearrange Array Elements by Sign
// const input = [1, 2, -3, -1, -2, 3]

function reArrangedElements(arr) {
  
  const res = []
  let posIndex = 0
  let negIndex = 1
  
  for(let i=0;i<arr.length;i++){
  	if(arr[i] > 0){
    	res[posIndex] = arr[i]
      posIndex += 2
		}else{
    	res[negIndex] = arr[i]
      negIndex += 2
    }
	}
  
  console.log(res)
}

// reArrangedElements(input)




// const input = [7,1,5,3,6,4]
function findBestTimeToBuyAndSell(arr) {
  let max = 0
  let minPrice = arr[0]
  
	for(let i=1;i<arr.length;i++){
  	
    const profit = arr[i] - minPrice
    
    max = Math.max(profit, max)
    
    minPrice = Math.min(arr[i], minPrice)
    
  }
  
  console.log({max, minPrice})
}

// findBestTimeToBuyAndSell(input)