// const input =[1,3,1,2]

function findDuplicate(arr){
  const actualSum = arr.length*(arr.length+1)/2
  const set = new Set()
  let dupEl = 0
  let sum = 0
  
  for(let i=0;i<arr.length;i++){
  	sum += arr[i]
    if(set.has(arr[i])){
    	dupEl = arr[i]
    }else{
       set.add(arr[i])
		}
  }
  
  sum = sum-dupEl
  console.log(`missing:${actualSum - sum} duplicate:${dupEl}`)
  
}



/* actualSum = sum + x */


// findDuplicate(input)


function findDup(arr){
 	let dup = 0
  let sum = 0
  let num = 0
  const actualSum = arr.length*(arr.length+1)/2
  
  for(let i=0;i<arr.length;i++){
  	const item = Math.abs(arr[i])
    sum += item
    if(arr[item-1] > 0){
    	arr[item-1] = arr[item-1]*-1
    }else{
    	dup = item
    }
	}
  
   sum = sum-dup
   console.log(`missing:${actualSum - sum} duplicate:${dup}`)
  
}


// findDup(input)

// Generate n pair of correct parenthesises

// let k = n

/* numOfOpeningBraces < n
numOfClosingBraces < numOfOpeningBraces
if(numOfOpeningBraces === n & numOfClosingBraces ===n) return */


function generatePairs(numberOfPairs){

	const result = []
	
  function helper(str,openingBraces, closingBraces){
  
  	const key = `${openingBraces}${closingBraces}`
    
  	if(openingBraces === numberOfPairs & closingBraces === numberOfPairs){
    	result.push(str)
    	return;
		}
    
    if(openingBraces < numberOfPairs){
    	const res = str+"{"
    	helper(res, openingBraces+1, closingBraces)
    }
    
    if(closingBraces < openingBraces){
    	const res = str+"}"
     	helper(res, openingBraces, closingBraces+1)
    }
  }
  
  helper("",0,0)
  
  return result
}


// console.log(generatePairs(3))

// const input = [1, 2,4,5]

function generateSubsets(arr) {
  const length = arr.length
  const result = {}

  function helper(output, index) {
    if (index >= length) {
      const key = JSON.stringify(output)
      if (!result.hasOwnProperty(key)) {
        result[key] = output
      }
      return;
    }

    helper([...output, arr[index]], index + 1)
    helper(output, index + 1)
  }

  for (let i = 0; i < length; i++) {
    helper([], i)
  }

  console.log(Object.values(result).length)
}


// generateSubsets(input)

// const input = [1,2,5,4]

function generatePermutations(arr) {
	const result = []

  function helper(input, output) {
  	if(input.length === 0){
    	if(output.length === arr.length){
      	result.push(output)
      }
      return
    }	
    
    if(input.length === 1){
    	result.push([...output, ...input])
      return;
    }
    
    for(let i=0;i<input.length;i++){
    	const temp = [...input]
      temp.splice(i,1)
    	helper(temp,[input[i]])
		}
    
   
  }

  for (let i = 0; i < arr.length; i++) {
  	const temp = [...arr]
    temp.splice(i,1)
    helper(temp,[arr[i]])
  }

	console.log(result.length)
}


// generatePermutations(input)

function findPalindromes(str){

    const palindromes = new Set([])
    
    function helper(left, right){
        
      while(left >=0 && right < str.length && str[left] === str[right]){
          if(right-left > 0) palindromes.add(str.slice(left, right+1))
        left--;
        right++;
          }
    }
    
    for(let i=0;i<str.length;i++){
          helper(i, i+1) // even length
      helper(i, i) // odd length
    }
    
    console.log([...palindromes])
    
    
  }
  
  
//   findPalindromes("abacdcaabaa")

const candidates = [2,3,1,4,5]
const target = 5

// 2 & [2,3,6,7] => index = 0 && index = 1
// index, sum, output
// base case if(sum > target) return
// if(sum === target) save that combination



function findCombinations(candidates, target){

	const res = {}
  
	function helper(index, sum, output){
  	if(sum > target || index >= candidates.length) return;
    if(sum === target){
    	const key= JSON.stringify(output)
    	res[key] = output
      return;
    }
    
    helper(index,sum+candidates[index],[...output,candidates[index]])
    helper(index+1,sum+candidates[index+1],[...output,candidates[index+1]])
    
	}
  
	for(let i=0;i<candidates.length;i++){
  	helper(i, 0, [])
  }
  
  console.log(Object.values(res))
}

// findCombinations(candidates, target)