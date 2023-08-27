/* Count the number of sub arrays with given xor K */

// const input = [4, 2, 2, 6, 4]

function getSubArrays(arr, k = 6) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let xor = 0
    for (let j = i; j < arr.length; j++) {
			xor = xor ^ arr[j]
      if(xor === k) count++
    }
  }
  
  return count
}

// console.log(getSubArrays(input))

/* Merge Overlapping Sub-intervals */

const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ]
  
  
  
  function mergeIntervals(arr){
      let i=0,j=1;
    while(j<arr.length){
        // if right of 1st arr >= left of 2nd arr
      // merged right will contain max(right1, right2)
      if(arr[i][1] >= arr[j][0]){
        const newInterval = [arr[i][0],Math.max(arr[i][1],arr[j][1])]
        arr.splice(i,2)
        arr.unshift(newInterval)
      }else{
          i++;
        j++;
      }
    }
    console.log(arr)
  }
  
//   mergeIntervals(intervals)


// let arr1 = [1, 4, 8, 10]
// let arr2 = [2, 3, 9]

function mergeTwoSortedArrays(arr1, arr2) {
  let pointer1 = 0
  let pointer2 = 0

  function moveSmallestElementToLast() {
    let index = pointer2
    if (index + 1 < arr2.length) {
      while (arr2[index] > arr2[index+1]) {
        const temp = arr2[index]
        arr2[index] = arr2[index + 1]
        arr2[index + 1] = temp
        index++;
      }
    }
  }

  function swap() {
    let temp = arr1[pointer1]
    arr1[pointer1] = arr2[pointer2]
    arr2[pointer2] = temp
  }

  while (pointer1 < arr1.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      pointer1++;
    } else {
      swap()
      console.log("after swap ",{arr1,arr2})
      moveSmallestElementToLast()
      console.log("after move ",{arr1,arr2})
    }
  }
}

// mergeTwoSortedArrays(arr1, arr2)

// Find the repeating and missing numbers
// const input = [3,1,2,5,3]

function findMissing(arr){
  const n = arr.length
  const sumN = n*(n+1)/2
  const sum2N = n*(n+1)*(2*n+1)/6
  let sum= 0;
  let sum2 = 0
  
  for(let i=0;i<arr.length;i++){
  	sum=sum+arr[i]
    sum2 = sum2+Math.pow(arr[i],2)
  }
  
  const val1 = sum - sumN //x-y
  let val2 = sum2 - sum2N // x2-y2 => (x+y)(x-y)
  
  val2 = val2/val1 //x+y
  
  const x = (val1+val2)/2
  const y = val2-x
  
  
  
  console.log({x, y})
}

// findMissing(input)


  