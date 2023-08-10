// pascal triangle

// complexity - n3
function ncr(n,r){
	let res = 1
  for(let i=0;i<r;i++){
  	res = res * (n-i)
    res = res/(i+1)
  }
  return res
}

function pascalTriangle(rows=1){
	const res = []
  for(let row=1;row<=rows;row++){
  	let temp = []
  	for(let col=1;col<=row;col++){
    	temp.push(ncr(row-1, col-1))
    }
    res.push(temp)
  }
  
  for(let i=0;i<res.length-4;i++){
  	console.log(res[i])
	}
}


function pascalTriangle(rows=1){
	const res = []
  for(let row=1;row<=rows;row++){
  	let temp = []
  	for(let col=1;col<=row;col++){
    	temp.push(ncr(row-1, col-1))
    }
    res.push(temp)
  }
  
  for(let i=0;i<res.length-4;i++){
  	console.log(res[i])
	}
}



// method - 2


function generateRow(n){
	let ans = 1
  let ansRow = [1]
  
  for(let c=1;c<n;c++){
  	ans = ans * (n-c)
    ans = ans/c
    ansRow.push(ans)
	}
  
  return ansRow
  
}

function pascalTraingle(rows=1){
	const res = []
  for(let n=1;n<=rows;n++){
  	res.push(generateRow(n))
  }
  
  for(let i=0;i<res.length;i++){
  	console.log(res[i])
	}
}



function findMajority(arr){
	const lookup = {}
  const res = []
  const majorityCount = Math.floor(arr.length/3)
  
  for(let i=0;i<arr.length;i++){
  
  	const value = arr[i]
    
  	if(!lookup[value]){
    	lookup[value] = 1
		}else{
    	
    	lookup[value] += 1
      if(lookup[value] > majorityCount && !res.includes(value)){
      	res.push(value)
      }
		}
    
    if(res.length === 2){
    	break;
    }
  }
  
  console.log(res)
}



// findMajority([11,33,33,11,33,11])

// Two pointer approach, fix one pointers(i) and move other two pointers (j,k) conditionally. 
function find3Sum(arr,target=0){
	const res = []
  arr.sort((a, b) =>a-b)
  for(let i=0;i<arr.length;i++){
  
  	if(i!==0 && arr[i] === arr[i-1]) continue;
    
  	let j=i+1
    let k=arr.length-1
    
    while(j<k){
    	const sum = arr[i] + arr[j] + arr[k]
      if(sum > target){
      	k--;
      }else if(sum < target){
      	j++;
      }else{
      	res.push([arr[i],arr[j],arr[k]])
        j++;
        k--;
        while(j<k && arr[j] === arr[j-1]) j++;
        while(j<k && arr[k] === arr[k+1]) k--;
      }
    }
  }
  console.log(res)
}


// Two pointer approach, fix two pointers(i,j) and move other two pointers (k,l) conditionally. 
function find4Sum(arr,target=0){
	const res = []
  arr.sort((a, b) =>a-b)
  for(let i=0;i<arr.length;i++){
  	if(i!==0 && arr[i]===arr[i-1]) continue;
  	for(let j=i+1;j<arr.length;j++){
      if(j!==1 && arr[j]===arr[j-1]) continue;
      let k=j+1
      let l=arr.length-1
      while(k<l){
      	let sum= arr[i] + arr[j] + arr[k] + arr[l]
        if(sum>target){
        	l--;
        }else if(sum<target){
        	k++;
        }else{
        	res.push([arr[i],arr[j],arr[k],arr[l]])
        	k++;
          l--;
          while(k<l && arr[k] === arr[k-1]) k++;
          while(k<l && arr[l] === arr[k+1]) l--;
        }
      }
    }
  }
  console.log(res)
}

// find4Sum([4,3,3,4,4,2,1,2,1,1],9)

function longestSubArr(arr, target = 0) {
  let arrLen = 0
  let sum = 0
  const lookup = {}
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
    if (sum === target) {
      arrLen = i + 1
    } else {
      if (sum in lookup) {
				arrLen = Math.max(arrLen, i - lookup[sum])
      }else{
        lookup[sum] = i
      }
    }
  }
  console.log(arrLen)
}

// longestSubArr([6, -2, 2, -8, 1, 7, 4, -10])