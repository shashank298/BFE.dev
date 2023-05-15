// deep cloning objects
function deepCloneObject(obj = {}) {
    if (!Object.keys(obj).length) return {};
  
    const result = {
      ...obj
    };
  
    function deepCloneArray(arr) {
      return arr.reduce(
        (acc, item, index) => {
          if (Array.isArray(item)) {
            arr[index] = [...deepCloneArray(item)];
          }
          return acc;
        },
        [...arr]
      );
    }
  
    for (let [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        result[key] = deepCloneArray(value);
      } else if (typeof value === "object" && value !== null) {
        result[key] = deepCloneObject(value);
      }
    }
  
    return result;
  }

  const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: [1, 2]
    }
  };
  
  const obj2 = deepCloneObject(obj1);
  const obj3 = obj1;
  
  obj3.c.d = 5;
  obj2.c.d = 6;
  obj2.c.e.push(23);
  obj3.c.e.push(12);
  
  // console.log(obj1, obj3, obj2);