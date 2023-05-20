// find friends
const friends = {
    a: ["b", "j"],
    b: ["d", "g"],
    d: ["p", "q"],
    g: ["x", "y"],
    j: "z"
  };
  
  const findFriends = (person) => {
    const closeFriend = friends[person];
    const friendsList = [];
  
    if (Array.isArray(closeFriend)) {
      closeFriend.forEach((friend) => {
        friendsList.push(friend);
        const acc = findFriends(friend);
        friendsList.push(...acc);
      });
    } else {
      if (closeFriend) friendsList.push(closeFriend);
      if (friends[closeFriend]) {
        friendsList.push(...findFriends(closeFriend));
      }
    }
  
    console.log(friendsList);
  
    return friendsList;
  };
  
  // console.log(findFriends("j"));
  
//   console.log(findFriends("a").length);

// =======================================================================================================
// =======================================================================================================

// Implement custom clearAllTimeouts function 
const timeoutWrapper = () => {
    const timerIds = [];
  
    function mySetTimeout(fn, time) {
      const id = setTimeout(fn, time);
      timerIds.push(id);
      return id;
    }
  
    function clearAllSetTimeouts() {
      while (timerIds.length) {
        clearTimeout(timerIds.pop());
      }
      console.log({ timerIds });
    }
  
    return { timerIds, mySetTimeout, clearAllSetTimeouts };
  };
  
  const { timerIds, mySetTimeout, clearAllSetTimeouts } = timeoutWrapper();
  
//   mySetTimeout(() => console.log("1"), 1000);
//   mySetTimeout(() => console.log("2"), 2000);
//   mySetTimeout(() => {
//     clearAllSetTimeouts();
//   }, 2500);
//   mySetTimeout(() => console.log("3"), 3000);
//   mySetTimeout(() => console.log("4"), 4000);

// =======================================================================================================
// =======================================================================================================

// "Add one", "Double it"

function findSteps(input = 0, output = 0) {
  if (input >= output) return "No action";

  const result = [];
  let total = input;

  while (total < output) {
    let add = total + 1;
    let double = total * 2;

    if (double > output || (add > double && add <= output)) {
      total = add;
      result.push("Add one");
    } else {
      total = double;
      result.push("Double it");
    }
  }

  return result;
}

// console.log(findSteps(10, 80));

// =======================================================================================================
// =======================================================================================================


const obj = {
    a: {
      b: (a, b, c) => a + b + c,
      c: (a, b, c) => a - b + c,
      e: {
        f: (a, b, c) => a - b - c
      }
    },
    d: (a, b, c) => a + b - c
  };
  
  const calculate = (obj) => {
    return function (...args) {
      const helper = (obj) => {
        for (let [key, value] of Object.entries(obj)) {
          if (typeof value !== "object") {
            obj[key] = value(...args);
          } else {
            obj[key] = helper(value);
          }
        }
        return obj;
      };
  
      return helper(obj);
    };
  };
  
//   console.log(calculate(obj)(1, 2, 3));


// /node1/node3/node4
// /node2/node4

// Output:
// {
//   node1: {
//      node3: {}
//   },
//   node2: {
//      node4: {}
//   }
//  }


// =======================================================================================================
// =======================================================================================================

const createObject = (arr = []) => {
  let obj = {};

  function helper(str, obj) {
    if (Object.keys(obj).length === 0) {
      return (obj[str] = {});
    } else {
      for (let [key, value] of Object.entries(obj)) {
        if (JSON.stringify(value) === "{}") {
          obj[key] = {
            [str]: {}
          };
        } else {
          helper(str, obj[key]);
        }
      }
    }
  }

  arr.forEach((value) => {
    const keys = value.split("/");
    const tempObj = {};
    keys.forEach((key) => helper(key, tempObj));
    obj = { ...obj, ...tempObj };
  });
  console.log(obj);
};

// createObject(["node1/node2/node3", "node4/node5/node6"]);


// =======================================================================================================
// =======================================================================================================


function lruCache(pages = [], cacheSize = 3) {
  let pageFaults = 0;
  const cache = [];
  const pageTime = {};

  function findLeastRecentlyUsedPage() {
    let minTime = Infinity;
    let minKey = "";
    for (let [key, value] of Object.entries(pageTime)) {
      if (value < minTime) {
        minTime = value;
        minKey = key;
      }
    }
    return minKey;
  }

  pages.forEach((currentPage, index) => {
    if (cache.includes(currentPage)) {
      pageTime[currentPage] = Date.now() + index;
      return;
    }

    if (cache.length >= cacheSize) {
      const lastUsedPage = findLeastRecentlyUsedPage();
      const cacheIndex = cache.findIndex(
        (item) => item === Number(lastUsedPage)
      );
      delete pageTime[lastUsedPage];
      console.log({ cacheIndex, currentPage });
      cache.splice(cacheIndex, 1);
    }

    cache.push(currentPage);
    pageFaults += 1;
    pageTime[currentPage] = Date.now() + index;
  });
  return { cache, pageTime, pageFaults };
}

// console.log(lruCache([1, 2, 3, 4, 1, 3]));

// =======================================================================================================
// =======================================================================================================

function findMissingNumbers(arr1 = [], arr2 = []) {
  const result = {};
  const deletedItems = [];
  function helper(arr) {
    arr.forEach((element) => {
      if (result[element] === undefined && !deletedItems.includes(element)) {
        result[element] = element;
      } else {
        delete result[element];
      }
    });
  }
  helper(arr1);
  helper(arr2);
  return Object.values(result);
}


// =======================================================================================================
// =======================================================================================================

const List = function (val) {
  this.value = val;
  this.next = null;
};

const list1 = new List(1);
const list2 = new List(2);
const list3 = new List(3);

list1.next = list2;
list2.next = list3;
list3.next = list1;

const removeCycle = (obj) => {
  const store = new WeakSet();
  store.add(obj);

  (function helper(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        if (store.has(obj[key])) {
          obj[key] = null;
        } else {
          store.add(obj[key]);
          helper(obj[key]);
        }
      }
    }
  })(obj);
};

// removeCycle(list1);
// console.log(list1);

// =======================================================================================================
// =======================================================================================================

const obj2 = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4
      }
    },
    h: "Good Night Moon"
  }
};


const filter = (s) => typeof s === "string";

const filterObj = (obj, fn) => {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      filterObj(value, fn);
      if (JSON.stringify(value) === "{}") {
        delete obj[key];
      }
    } else {
      const result = fn(value);
      if (!result) {
        delete obj[key];
      }
    }
  }
};

// =======================================================================================================
// =======================================================================================================
