// Implement throttle([1,2,3,4,5,6,7,8,9,10], no.of items, func, delay)

function throttleArray(arr=[], limit, callback, delay){
    let lastRun;

    return function(){
        // execute only if time diff b/w last run and curr is >= delay
        if(!lastRun){
            const ele = arr.splice(0,limit)
            callback(ele)   
            lastRun = Date.now()
        }else if(lastRun-Date.now() < delay) return;
           
        const ele = arr.splice(0,limit)
        callback(ele)   
        lastRun = Date.now()
     
    }
   
}

function throttle(arr=[], limit, callback, delay){
    let shouldWait = false
    let timerId = null
    return function(){
        if(shouldWait) return;

        const ele = arr.splice(0,limit)
        callback(ele);
        shouldWait = true
        
        timerId = setTimeout(() => {
            shouldWait = false
            clearTimeout(timerId)
        },[delay])
    }   
}

// const btn = document.getElementById("btn");
// btn.addEventListener(
// "click",
// throttle(
//     [1, 2, 3, 4, 5, 6, 7, 8],
//     2,
//     (tasks) => {
//     console.log(tasks);
//     },
//     3000
// )
// );