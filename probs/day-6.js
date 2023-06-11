Array.prototype.listeners = {}

Array.prototype.addListener = function(event, callback){
  if(!this.listeners[event]){
    this.listeners[event] = []
  }
  this.listeners[event].push(callback)
}

Array.prototype.removeListener = function(event, callback){
  if(!this.listeners[event]){
    this.listeners[event] = []
  }
  this.listeners[event].push(callback)
}

Array.prototype.pushWithEvent = function(event, item){
	const arr = this.push(...item)
	this.listeners[event].forEach(callback => callback(event, item, arr))
}

Array.prototype.popWithEvent = function(event){
	const arr = this
  const item = this.pop()
	this.listeners[event].forEach(callback => callback(event, item, arr))
}


// Input:

// const arr = [];
//  arr.addListener('add', (eventName, items, array) => {
//    console.log('items were added', items);
//  });
 
//  arr.addListener('add', (eventName, items, array) => {
//    console.log('coll bro', items);
//  });

//  arr.addListener('remove', (eventName, item, array) => {
//    console.log(item, 'was removed');
// });

// arr.pushWithEvent('add', [4, 5]);
//  arr.popWithEvent('remove');

// =======================================================================================================
// =======================================================================================================

// Pause timer

function timer(initialValue=0, steps=1){
    let timerRef;
    let value = initialValue
        function incrementer(){
        timerRef = setInterval(()=>{
          value+=steps
        console.log(value)
      },1000)
    }
    
        function stop(){
        clearInterval(timerRef)
      }
      return {
          start:incrementer,
        stop:stop,
      }
    }
    
    
    const time = timer()
    // time.start()
    
    // setTimeout(()=>{
    //     time.stop()
    // },4000)
    
    // setTimeout(()=>{
    //     time.start()
    // },10000)
    

// =======================================================================================================
// =======================================================================================================


// Iterator
const helper = (arr) => {
    let index = 0;
    return {
      next: function () {
        if (index >= arr.length) {
          return null;
        }
        return arr[index++];
      },
      done: function () {
        return index >= arr.length;
      }
    };
  };
  
  const iterator = helper([1, "hello", "kanna"]);
    

// =======================================================================================================
// =======================================================================================================

// Router implementation

const browserRouter = () => {
    let stack = [];
    let pointer = -1;
    return {
      visit: function (url) {
        if (pointer !== stack.length - 1) {
          stack.splice(pointer + 1);
        }
        stack.push(url);
        pointer++;
      },
      current: function () {
        console.log(`You are viewing ${stack[pointer]}`);
      },
      backward: function () {
        if (pointer > 0) {
          pointer--;
        }
      },
      forward: function () {
        if (pointer < stack.length - 1) {
          pointer++;
        }
      }
    };
  };
  
  const route = browserRouter();
  
//   route.visit("Cricbuzz home page");
//   route.visit("MI vs CSK live cricket score");
//   route.visit("MI Summary");
//   route.visit("Player profile");
//   route.current();
//   route.backward();
//   route.backward();
//   route.backward();
//   route.current();
//   route.visit("RCB vs LSG live cricket score");
//   route.visit("RCB Summary");
//   route.current();
//   route.forward();
//   route.backward();
//   route.backward();
//   route.current();

// =======================================================================================================
// =======================================================================================================

// Implement React.createElement

const json = {
    type: "div",
    props: { id: "hello", class: "foo" },
    children: [
      { type: "h1", children: "HELLO" },
      {
        type: "p",
        children: [{ type: "span", props: { class: "bar" }, children: "World" }]
      }
    ]
  };
  
  const JSONtoHTML = (json) => {
    const { type, props = {}, children = "" } = json;
    let fragments = document.createDocumentFragment();
  
    const element = document.createElement(type);
  
    for (let [key, value] of Object.entries(props)) {
      element.setAttribute(key, value);
    }
  
    if (Array.isArray(children)) {
      children.forEach((child) => {
        element.appendChild(JSONtoHTML(child));
      });
    } else {
      element.innerText = children;
    }
  
    fragments.append(element);
  
    return fragments;
  };
  
//   const convertedHtml = JSONtoHTML(json);
//   app.append(convertedHtml);

// =======================================================================================================
// =======================================================================================================

// Get nodes of same color

// const getComputedColor = (color) => {
//     const div = document.createElement("div");
//     div.style.color = color;
//     document.body.appendChild(div);
//     const computedStyles = window.getComputedStyle(div);
//     const { color: computedColor } = computedStyles;
//     return computedColor;
//   };
  
//   const findElementByColor = (root, color) => {
//     const computedColor = getComputedColor(color);
//     const results = [];
//     const helper = (el) => {
//       const computedElColor = getComputedColor(el.style["color"]);
//       if (computedElColor === computedColor) {
//         results.push(el);
//       }
  
//       for (let child of el.children) {
//         helper(child);
//       }
//     };
//     helper(root);
//     return results;
//   };
  
  // const root = document.getElementById("root");
  // console.log(findElementByColor(root, "black"));