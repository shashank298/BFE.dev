const createObj = (keysObj = {}) => {
    if (Object.keys(keysObj).length === 0) return {};
  
    let result = {};
  
    for (let [keyStr, value] of Object.entries(keysObj)) {
      const keys = keyStr.split("_");
      helper(result, keys, value);
    }
  
    function helper(obj = {}, keys, value) {
      if (keys.length === 1) {
        obj[keys[0]] = value;
      } else {
        const mainKey = keys.shift();
        obj[mainKey] = helper(obj[mainKey], keys, value);
      }
      return obj;
    }
  
    return result;
  };
  
  const input = {
    id: 1,
    created: new Date(),
    user_name: "shashank",
    user_tech: "frontend",
    user_age: "25",
    user_phone_personal: "99999999999",
    user_phone_alternate: "8888888888",
    user_address_home_add1: "hme1",
    user_address_home_add2: "hme2",
    user_address_office_add1: "off1",
    user_address_office_add2: "off2"
  };
  // console.log(createObj(input));

  // ==================================================================================================================================
  // ==================================================================================================================================

  // let form = document.querySelector("#post");

// Get all field data from the form
// returns a FormData object
// let data = new FormData(form);
// for (let entry of data) {
//   console.log(entry);
// }

// for (let [key, value] of data) {
//   console.log({ key });
//   console.log(value);
// }

// const modalContainer = document.querySelector(".modal-container");
// const button = document.querySelector(".modal-button");

// function toggleModal(toggle) {
//   modalContainer.style.display = toggle ? "flex" : "none";
// }

// button.addEventListener("click", (e) => {
//   toggleModal(true);
// });

// modalContainer.addEventListener("click", (e) => {
//   if (e.target.className === "modal-container") toggleModal(false);
// });

function PromisePolyfill(func) {
  let onResolve,
    onReject,
    isFullfilled = false,
    called = false,
    value,
    isRejected = false,
    errCalled = false,
    errValue;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      called = true;
      isRejected = true;
      errCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    console.log({ called, isFullfilled });
    if (isFullfilled && !called) {
      resolve(value);
    }
    return this;
  };

  function reject(val) {
    isRejected = true;
    errValue = val;
    if (typeof onReject === "function") {
      onReject(val);
      errCalled = true;
      called = true;
      isFullfilled = true;
    }
  }

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !errCalled) {
      reject(errValue);
    }
    return this;
  };
  func(resolve, reject);
}

Promise.customAll = function (promises = []) {
  const results = [];
  let count = 0;
  if (!promises.length) return;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          count += 1;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.customRace = function (promises = []) {
  if (!promises.length) return;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("first promise resolved..");
//   }, 1000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//   reject("second promise resolved..");
// });

// const thirdPromise = 1;

// Promise.customAll([firstPromise, secondPromise])
//   .then((val) => console.log(val))
//   .catch((err) => console.error(err));

// ==================================================================================================================================
// ==================================================================================================================================

