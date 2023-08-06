function customFlat(inputArr, depth=1){
	function flat(arr, depth){
  	let temp=[]
    for(let i=0;i<arr.length;i++){
    	if(Array.isArray(arr[i]) && depth>=1){
      	const res = flat(arr[i], depth-1)
        temp.push(...res)
      }else{
      	temp.push(arr[i])
      }
    }
    return temp
	}
  return flat(inputArr, depth)
}

/* console.log(customFlat([1,2,[3,4],5,[[6,[7]]]],1)) */

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};



Function.prototype.customBind = function(context, ...args){
   // context is obj
   // this is a callbackfun
   context.callBackFunc = this;
   return function(...args2){
   	return context.callBackFunc(...args, ...args2)
   }
}

const fun = greet.customBind(obj)