// [4,1,4]
// [3,3,3]
// [2,5,2]
// [1,7,1]
// [0,9,0]
function pattern(n) {
	
  for (let i = 0; i < n; i++) {
    let res = ""
    let start = i%2 === 0 ? "1" : "0"
    for(let j=0;j<=i;j++){
    	res+= start
      start = start==="1" ? "0" : "1" 
    }
    console.log(res)
  }
}
// pattern(5)
