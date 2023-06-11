// const input = document.getElementById("root");

const cache = {};
function getComputedColor(color) {
  if (color in cache) {
    return cache[color];
  }
  const el = document.createElement("div");
  el.style.color = color;
  document.body.appendChild(el);
  const computedColor = window.getComputedStyle(el)?.color;
  cache[color] = computedColor;
  document.body.removeChild(el);
  return computedColor;
}

function findElementsByColor(id, color) {
  const root = document.getElementById(id);
  const computedStyle = getComputedColor(color);
  const result = Array.from(root.children).filter(
    (el) => window.getComputedStyle(el)?.color === computedStyle
  );
  return result;
}

// console.log(findElementsByColor("root", "white"));
// function useCustomHook() {
//     const store = new Map();
//     Object.defineProperty(document, "customCookie", {
//       configurable: true,
//       set(val) {

//       }
//     });
//     const parseCookieString = (str) => {
//       str.split()
//     }
//   }
  
  // document.cookie = "name=shashank;max-age=1";
  // document.cookie = "age=25";
  
  // console.log(document.cookie);
  
  // setTimeout(() => {
  //   console.log(document.cookie);
  // }, 1500);

// Overlap circles

// 1. Create circle on click (We will position circle in absolute position, so it will have left, right, top, bottom)
// 2. Modify the color of overlapped circles
// 3. Resize the circles

const circles = []
const radius = 50

const elementsOverlap = (rect1, rect2) => {
  const collide = !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  );

  return collide;
};

function createCircle(x,y){
  const newCircle = {
    top: y-radius,
    bottom: y+radius,
    left: x-radius,
    right: x+radius,
    isOverlapping: false,
  }
  let isOverlapping = false
  circles.forEach(circle => {
    if(elementsOverlap(newCircle, circle)){
      isOverlapping=true
    }
  })

  newCircle.isOverlapping = isOverlapping
  console.log(newCircle)
  circles.push(newCircle)
}

function getCircleEl(top, left, isOverlapping){
  const div = document.createElement("div")
  div.style.cssText = `position:absolute;width:${radius*2}px;height:${radius*2}px;border-radius:50%;top:${top}px;left:${left}px;background-color:${isOverlapping ? "green" : "red"};resize:both;`
  return div
}

function handleClick(e){
  const {clientX, clientY} = e
  createCircle(clientX, clientY)
  const root = new DocumentFragment()
  circles.forEach(circle => {
    const el = getCircleEl(circle.top, circle.left, circle.isOverlapping)
    root.appendChild(el)
  })
  rootEl.appendChild(root)
}

// const rootEl = document.querySelector("#root")
// rootEl.addEventListener("click", handleClick)

