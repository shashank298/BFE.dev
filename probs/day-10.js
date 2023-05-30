// Sorting Algos

// Bubble sort - we swap adjacent elements by comparing each other, we do it until we get sorted array
const a = [4,2,100,99,10000,-1, 99, 2]

function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                //swap
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true
            }
        }
    }while(swapped)
    return arr
}

// console.log(bubbleSort(a))

// Insertion sort - we assume left part of array as sorted one and on iteration we compare each element with left part of arr and make changes to make sure it's still in sorted

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currentEl = arr[i]
        let sortedArrIndex = i - 1
        while(sortedArrIndex >=0 && arr[sortedArrIndex]>currentEl){
            arr[sortedArrIndex+1] = arr[sortedArrIndex]
            sortedArrIndex--
        }
        arr[sortedArrIndex+1] = currentEl
    }
    return arr;
}

// console.log(insertionSort(a))


// Quick sort - 
// we assume last element as a pivot element & divide our arr into two parts left arr containing all that are less than pivot & right containing all elements that are grater than pivot 
// we do this until we have single element in that arr and return it

function quickSort(arr){

    if(arr.length<2) return arr

    const pivot = arr[arr.length-1]
    const left =[]
    const right =[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort(a))

// Merge sort - 
// we will divide the array into two half and we do this until we have 1 one in both the arrays
// then we start merging them by comparing elements in both arrays


function mergeSort(arr){
    if(arr.length < 2) return arr
    const mid =Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    function helper(leftArr=[], rightArr=[]){
        const sortedArr = []

        while(leftArr.length && rightArr.length){
            if(leftArr[0]<rightArr[0]){
                sortedArr.push(leftArr.shift())
            }else{
                sortedArr.push(rightArr.shift())
            }
        }

        return [...sortedArr, ...leftArr, ...rightArr]
    }

    return helper(mergeSort(left), mergeSort(right))
}

// console.log(mergeSort(a))

// Selection sort - we select minimum number in each iteration and replace it with current index item

function selectionSort(arr){
	for(let i=0;i<arr.length-1;i++){
  	let min = i
    for(let j= i+1;j<arr.length;j++){
    	if(arr[j]<arr[min]){
      	min = j
			}
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  
  return arr
}

// console.log(selectionSort([4,2,100,99,10000,-1, 99, 2]))