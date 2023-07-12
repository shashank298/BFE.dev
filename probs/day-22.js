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
