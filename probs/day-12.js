const input = "Hello world. Kanna"


function removeDuplicates(input){
	let lookup={}
  let res = ""
  //1. we need to check if that char exists in the string
  // 2. Ignore spaces & push everything If doesn't exist
  
  for(let char of input){
  	if(lookup[char] === undefined || char === " "){
    	lookup[char] = char
      res += char
		}
    
  }
	return res
}


function lookupMethod(input){
	let writer = 0
  let reader = 0
  const lookup = new Set([])
  
  while(reader<input.length){
  	if(!lookup.has(input[reader])){
    	lookup.add(input[reader])
      if(writer !== reader){
        input = input.slice(0,writer)+input[reader]+input.slice(writer+1)
      }
      writer++
		}
    
    reader++
  }
  return input.substr(0,writer)
}
// console.log(lookupMethod(input))



function longestCommonSubSequence(str1, str2){
    const cache = new Map()
    function helper(index1, index2){
        const key = `${index1}${index2}`
        if(index1===0 || index2===0){
          return 0
          }else if(str1[index1] === str2[index2]){
          if(cache.has(key)){
                  return cache.get(key)
                }
        const res = 1 + helper(index1-1, index2-1)
        cache.set(key, res)
        return res
          }else{
          return Math.max(helper(index1, index2-1), helper(index1-1, index2))
      }
      }
    
    
    return helper(str1.length, str2.length)
    
  }
  
//   console.time("1");
//   console.log(longestCommonSubSequence("abcdefghdsadadsadasd", "acesdsdsadsad"))
//   console.timeEnd("1");




// const input = " sdfIs sdfsdf sd f sdfsdfsd " 
// const outpu = "JS LOVE I"

function revreseStr(input){
	let left = input.length-1
  let right = input.length-1
  let result = ""
  
 	while(left >= 0){
  	let leftChar = input[left]
    let rightChar = input[right]
    
    if(rightChar === " " && leftChar === " "){
    	result +=	" "
        left--;
        right--;
	}
    
    if(leftChar != " "){
    	left--;
    }else{
        result += input.slice(left+1, right+1)
        right = left
	}
  }
  return result+input.slice(left+1, right+1)
}

// console.log(revreseStr(input))



function countPalindromes(str, left, right){
	let count = 0
  while(left>=0 && right<str.length && str[left] === str[right]){
  	count+=1
    left--;
    right++;
	}
  
  return count;

}

function findPalindromes(str){
	let totalCount = 0
  for(let i=0;i<str.length;i++){
  	totalCount += countPalindromes(str, i, i)
    totalCount += countPalindromes(str, i, i+1)
	}
  return totalCount;
}

// console.log(findPalindromes("aabbba"))



function maxSubStr(str1, str2){
    const cache = new Map()
    function helper(index1, index2){
        const key = `${index1}${index2}`
        if(index1===0 || index2===0){
          return 0
          }else if(str1[index1] === str2[index2]){
          if(cache.has(key)){
                  return cache.get(key)
                }
        const res = 1 + helper(index1-1, index2-1)
        cache.set(key, res)
        return res
          }else{
          return Math.max(helper(index1, index2-1), helper(index1-1, index2))
      }
      }
    
    
    return helper(str1.length, str2.length)
    
  }
  
//   console.time("1");
//   console.log(maxSubStr("abcdefghdsadadsadasd", "acesdsdsadsad"))
//   console.timeEnd("1");




function createSetTimeout() {
  const timerIds = {}
  let id = 0

  function customSetTimeout(callback, delay, ...args) {
    const timerId = ++id;
    let startTime = Date.now()
  	const intervalId = setInterval(() => {
       const currTime = Date.now()
       if (currTime - startTime > delay) {
         startTime = Date.now()
         callback.apply(this, args)
       }
     }, 1)
     timerIds[timerId] = intervalId
		return timerId
  }

  function customClearTimeout(id) {
    clearInterval(timerIds[id])
    delete timerIds[id]
  }


  return {
    customSetTimeout,
    customClearTimeout
  }


}

const {
  customSetTimeout,
  customClearTimeout
} = createSetTimeout()

// const id = customSetTimeout(() => console.log("Hi"), 3000)
// setTimeout(() => customClearTimeout(id), 6000)
// console.log("sadadas")

function createSetTimeout() {
  var timerId = 0
  var timerMap = {}

  function setTimeoutPolyfill(callback, delay) {
      var id = timerId++
      timerMap[id] = true
      var start = Date.now()
      function triggerCallback() {
          if (!timerMap[id]) return
          if (Date.now() > start + delay) {
              callback()
          } else {
              requestIdleCallback(triggerCallback)
          }
      }
      requestIdleCallback(triggerCallback)
      return id
  }

  function clearTimeoutPoly(id) {
      delete timerMap[id]
  }
  return {setTimeoutPolyfill, clearTimeoutPoly}
}
var {setTimeoutPolyfill, clearTimeoutPoly} = createSetTimeout()

// console.log("start")
// var myId = setTimeoutPolyfill(function() {
//   console.log("Welcome to jscafe")
// }, 1000)
// clearTimeoutPoly(myId)


// console.log("end")