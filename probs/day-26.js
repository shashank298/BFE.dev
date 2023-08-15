// Implement throttle([1,2,3,4,5,6,7,8,9,10], no.of items, func, delay)

function throttleArray(arr = [], limit, callback, delay) {
  let lastRun;

  return function () {
    // execute only if time diff b/w last run and curr is >= delay
    if (!lastRun) {
      const ele = arr.splice(0, limit);
      callback(ele);
      lastRun = Date.now();
    } else if (lastRun - Date.now() < delay) return;

    const ele = arr.splice(0, limit);
    callback(ele);
    lastRun = Date.now();
  };
}

function throttle(arr = [], limit, callback, delay) {
  let shouldWait = false;
  let timerId = null;
  return function () {
    if (shouldWait) return;

    const ele = arr.splice(0, limit);
    callback(ele);
    shouldWait = true;

    timerId = setTimeout(() => {
      shouldWait = false;
      clearTimeout(timerId);
    }, [delay]);
  };
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

const SDK = function () {
  this.logs = [];
  this.count = 1;
  this.log = function (event) {
    this.logs.push(event);
  };
  this.wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject("Error because of count");
        }
        resolve();
      }, 1000);
    });
  this.sendAnalytics = async function (func) {
    if (!this.logs.length) return;
    const currEvent = this.logs.shift();
    try {
      await this.wait();
      func(currEvent);
      this.count++;
    } catch (error) {
      console.error(error);
      this.logs.unshift(currEvent);
      this.count = 1;
    } finally {
      this.sendAnalytics(func);
    }
  };
};

class SDKClass{
  constructor(){
    this.logs = [];
    this.count = 1;
  }
  
  log = function (event) {
    this.logs.push(event);
  };
  
  wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject("Error because of count");
        }
        resolve();
      }, 1000);
    });
  
  sendAnalytics = async function (func) {
    if (!this.logs.length) return;
    const currEvent = this.logs.shift();
    try {
      await this.wait();
      func(currEvent);
      this.count++;
    } catch (error) {
      console.error(error);
      this.logs.unshift(currEvent);
      this.count = 1;
    } finally {
      this.sendAnalytics(func);
    }
  };

};

const sdk = new SDK()
sdk.log("1")
sdk.log("2")
sdk.log("3")
sdk.log("4")
sdk.log("5")
sdk.log("6")
sdk.sendAnalytics(console.log)
