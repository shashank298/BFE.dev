// Given an array of non-negative integers, 
// your task is to move all the zeros to the end of the array 
// while keeping the non-zero elements at the start of the array in their original order. Return the modified array.

function moveZeros(arr=[1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]){

    let left = 0
    let right = arr.length -1

    while(left<right){

        if(arr[left] === 0 && arr[right] !== 0){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        } 
        if(arr[left]!== 0){
            left++
        }
        if(arr[right] === 0){
            right--;
        }

    }
    return arr
}

// Given two sorted Arrays return the union
function getUnion(arr1=[], arr2=[]){
    let union = []
    while(arr1.length > 0 && arr2.length > 0 ){
        if(arr1[0] <= arr2[0]){
            union.push(arr1.shift())
        }else{
            union.push(arr2.shift())
        }
    }

    function inertElementsToUnionArr(arr){
        arr.forEach(el => union.push(el))
    }

    inertElementsToUnionArr(arr1)
    inertElementsToUnionArr(arr2)
    
    return union
}
