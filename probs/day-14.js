const input = [2, 2, 2, 2, 2, 2];

const subArrSize = 2;

function findMinSubArr(arr, size) {
  let right = 0;
  const lookupSet = new Set();
  let index = Number.POSITIVE_INFINITY;

  if (size <= 0 || arr.length === 0) return -1;

  if (size === 1) return 0;

  for (let i = 0; i < arr.length - 1; i++) {
    right = 1;

    lookupSet.add(arr[i]);

    while (
      right < size &&
      i + right < arr.length &&
      !lookupSet.has(arr[right + i])
    ) {
      lookupSet.add(arr[right + i]);
      right += 1;
    }

    if (lookupSet.size === size && i < index) {
      index = i;
    }

    lookupSet.clear();
  }

  return index === Number.POSITIVE_INFINITY ? -1 : index;
}

/* console.log(findMinSubArr(input, subArrSize)) */
const inp = [33, 20, 34, 30, 35, 36, 37, 21];

function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return -1;
  const lookUp = new Set([...arr]);
  let pointer = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    pointer = 1;

    while (pointer + i < arr.length && lookUp.has(arr[i] + pointer)) {
      pointer += 1;
    }

    if (pointer > maxCount) {
      maxCount = pointer;
    }
  }
  return maxCount;
}

// console.log(longestConsecutiveSequence(inp))

// House Robber II
// const input = [1,5,1,2,6]

// 1. find even & odd sum
// 2. I'll compare and get the max sum
// 3. Suppose if odd sum is highest
//.   If arr size is odd
//    1.Find two max values, one by removing first & another by removing last
//    2.compare the max with even max & return the max among them
//.   else return odd max
// 4. Suppose if even sum is highest
//    If arr size is even
//    1.Find two max values, one by removing second & another by removing last
//    2.compare the max with odd max & return the max among them
//    else return even max

function findMax(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  let sumOfOdds = 0;
  let sumOfEvens = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      sumOfEvens += arr[i];
    } else {
      sumOfOdds += arr[i];
    }
  }

  if (sumOfEvens > sumOfOdds) {
    if (arr.length % 2 === 0) {
      const maxValue = Math.max(
        sumOfEvens - arr[1],
        sumOfEvens - arr[arr.length - 1]
      );
      return Math.max(maxValue, sumOfOdds);
    }
    return sumOfEvens;
  }

  if (arr.length % 2 === 1) {
    const maxValue = Math.max(
      sumOfOdds - arr[0],
      sumOfOdds - arr[arr.length - 1]
    );
    return Math.max(maxValue, sumOfEvens);
  }

  return sumOfOdds;
}

// console.log(findMax(input))

// const inputArr = [1,2,4,6,9]
// const valueToInsert = 7

function findInsertPosition(arr, val) {
  function findIndex(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);

      if (midIndex === 0) {
        return -1;
      }

      if (midIndex === arr.length - 1) {
        return arr.length;
      }

      if (val > arr[midIndex]) {
        leftIndex = midIndex + 1;
        console.log({ midIndex, leftIndex, rightIndex });
        if (val < arr[leftIndex]) {
          return leftIndex;
        }
      } else {
        rightIndex = midIndex - 1;
        console.log({ midIndex, leftIndex, rightIndex });
        if (val > arr[rightIndex]) {
          return rightIndex + 1;
        }
      }
    }
  }

  const index = findIndex(arr);
  if (index === -1) {
    console.log("Insert at start");
  } else if (index === arr.length) {
    console.log("Insert at last");
  } else {
    console.log(`Insert at ${index}`);
  }
}

// findInsertPosition(inputArr,valueToInsert)


// find right max & left min

 function findGraterNumber(arr){
	if(arr.length === 0) return []
  if(arr.length === 1) return arr
  
  let right = arr.length - 1
  let left = arr.length - 2
  
  while(left>=0 && arr[right] <= arr[left]){
  	left-=1;
    right-=1;
  }
  
  if(left == -1){
  	return arr
  }
  
  [arr[left], arr[right]] = [arr[right], arr[left]];
  
  return arr
}

// console.log(findGraterNumber([0,0,0,0,0]))

// const input = [-6,-3,2,1,5]

function sortedSquaresArr(inputArr){

	for(let i=0;i<inputArr.length;i++){
  	inputArr[i] = Math.pow(Math.abs(inputArr[i]),2) 
  }
	function sortArr(arr){

	if(arr.length<2) return arr
	const pivot = arr[arr.length-1]
  const left = []
  const right = []
  
  for(let i=0;i<arr.length-1;i++){
  	const currEl = arr[i]
    if(currEl > pivot){
    	right.push(currEl)
		}else{
    	left.push(currEl)
    }
  }
  
  return [...sortArr(left),pivot,...sortArr(right)]
}
	return sortArr(inputArr)
}

// console.log(sortedSquaresArr(input))