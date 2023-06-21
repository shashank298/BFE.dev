// largest element in the array

// const inp1 = [2,4,1,2,7,8,8,6,9]

function largestInput(arr){
    let maxVal = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i] > maxVal){
            maxVal = arr[i]
        }
    }
    return maxVal
}

// console.log(largestInput(inp1))

// second largest 
function secondLargest(arr){
    let firstMax = arr[0]
    let secondMax = -1
    for(let i=1;i<arr.length;i++){
        if(arr[i] > firstMax){
            secondMax = firstMax
            firstMax = arr[i]
        }else if(arr[i] > secondMax && arr[i]<firstMax){
            secondMax = arr[i]
        }
    }
    return secondMax
}

// console.log(secondLargest(inp1))

// Remove duplicates
// const inp1 = [1,1,1,2,2,3,4,6,6]

function removeDuplicates(arr){
    let leftIndex = 0
    let rightIndex = leftIndex+1
    // check both left & right && inc right
    // if left & right are not equal replace left+1 with right and inc both left & right
    while(rightIndex < arr.length){
        if(arr[leftIndex] !== arr[rightIndex]){
            [arr[leftIndex + 1],arr[rightIndex]] = [arr[rightIndex],arr[leftIndex + 1]]
            leftIndex++
            rightIndex++
        }else{
            rightIndex++
        }
    }
    return arr.slice(0,leftIndex+1)
}

// console.log(removeDuplicates(inp1))

// left rotate the array by one place
// const inp1 = [1,2,3,4,5,6,7]
function leftRotateArrByOne(arr){
    let temp = arr[0]
    let left = 1
    // replace left element by left - 1 element
    while(left<arr.length){
        arr[left-1] = arr[left]
        left++;
    }
    arr[left-1] = temp
    return arr;
}
// console.log(leftRotateArrByOne(inp1))
// console.log(leftRotateArrByOne(inp1))
// console.log(leftRotateArrByOne(inp1))
// console.log(leftRotateArrByOne(inp1))

// const inp1 = [0,1,1,0,2,3,40,0,0,6,5,0,0,5,0]

function moveZerosToEnd(arr){
    // take two pointers, left=0 & right=1
    // If left is 0 & right != 0 swap both
    // If left & right both are 0 the inc right
    // If left is not zero & right is zero or both are not 0 inc both
    let left = 0
    let right = 1
    while(right < arr.length){
        if(arr[left] === 0 && arr[right] !== 0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            right++;
            left++;
        }else if(arr[left] === 0 && arr[right] === 0){
            right++;
        }else{
            right++;
            left++;
        }
    }
    return arr
}

// console.log(moveZerosToEnd(inp1))