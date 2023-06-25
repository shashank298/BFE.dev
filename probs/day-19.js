// const inp1 = [1, 2, 3, 4, 4]
// const inp2 = [2, 3, 5, 6]

function findUnion(arr1, arr2) {
  const union = []
  let pointer1 = 0
  let pointer2 = 0

  function checkAndUpdateUnionArr(arr, pointer) {
    if (union.at(-1) !== arr[pointer]) {
      union.push(arr[pointer])
    }
    pointer += 1;
    return pointer;
  }

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      pointer1 = checkAndUpdateUnionArr(arr1, pointer1)
    } else {
      pointer2 = checkAndUpdateUnionArr(arr2, pointer2)
    }
  }


  while (pointer1 < arr1.length) {
    pointer1 = checkAndUpdateUnionArr(arr1, pointer1)
  }

  while (pointer2 < arr2.length) {
    pointer2 = checkAndUpdateUnionArr(arr2, pointer2)
  }

  console.log(union)

}

// findUnion(inp1, inp2)

function findIntersection(arr1, arr2) {

    const intersection = []
    let pointer1 = 0
    let pointer2 = 0
  
  
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] === arr2[pointer2]) {
        if (intersection.at(-1) !== arr1[pointer1]) {
          intersection.push(arr1[pointer1])
        }
        pointer1 += 1;
      } else {
        if (arr1[pointer1] < arr2[pointer2]) {
          pointer1++;
        } else {
          pointer2++;
        }
      }
    }
    console.log(intersection)
}

// const input = [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]

function findMaxConsecutiveOnes1(arr) {
    let left = 0
    let right = 0
    let maxSum = 0
    let currSum = 0
    while (right < arr.length) {
  
      if (left === right) {
        if (arr[left] !== 1) {
          left++;
          right++;
        } else {
          currSum++;
          right++;
        }
      } else if (arr[left] === 1 && arr[right] === 1) {
        currSum++;
        right++;
      } else {
        maxSum = Math.max(currSum, maxSum)
        currSum = 0
        right = right + 1
        left = right
      }
    }
  
    console.log(maxSum)
  
}

function findMaxConsecutiveOnes2(arr) {
    let maxSum = 0
    let currSum = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            currSum++;
            maxSum = Math.max(maxSum, currSum)
        }else{
            currSum = 0
        }
    }
    console.log(maxSum)
  }

//   const input = [1,2,2,3,3,4,4,5,5]

function findElementThatAppearOnce(arr){
	const res = {}
  for(let i=0;i<arr.length;i++){
  	const key = arr[i]
  	if(!res[key]){
    	res[key] = 0
    }
  	res[key] +=1
  }
  
  for(let key in res){
  	const value = res[key]
    if(value === 1){
    	return key
    }
	}
  return -1;
}

// const input = [1, 2, 3, 4, 1, 1, 0, 3, 3]
// const total = 6

 
function longestSubArray1(arr,sum){
  let arrLen = 0
  for(let i=0;i<arr.length-1;i++){
    let currSum = 0
    for(let j=i;j<arr.length;j++){
      currSum += arr[j]
      if(currSum === sum){
        arrLen = Math.max(arrLen, j-i+1);
      }
      if(currSum > sum){
        break;
      }
    }
  }
  console.log(arrLen)
}

// Use two pointers
// Keep adding the right index numbers & if currSum > sum then move the left index and subtract the value from currSum

function longestSubArray2(arr, sum) {
  let left = 0
  let right = 0
  let currSum = 0
  let maxLen = 0

  while (left < arr.length && right < arr.length) {
    if (left === right) {
      currSum += arr[right]
      right++;
      continue;
    }
    currSum += arr[right]
    if (currSum === sum) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else if (currSum > sum) {
      while (left < right && currSum > sum) {
        currSum = currSum - arr[left]
        left++;
      }
    }
    right++;

  }
  console.log(maxLen)
}
// complexity O(2n) 
// second while loop runs n incase of worst case
// [3,3,3,3] k=3
// first time it runs - 0
// second time - 1
// third time - 1
// fourth time - 1, so we can see it's not running n times for every iteration