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
