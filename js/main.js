const elBtn = document.querySelector(".js-btn")
const clRed = document.querySelector(".cl-red")
const clYellow = document.querySelector(".cl-yellow")
const clGreen = document.querySelector(".cl-green")
const elTimer = document.querySelector(".js-timer")
elBtn.addEventListener("click" , (e)=>{
  e.preventDefault()

let count = 10
setInterval(()=>{

count = count - 1
elTimer.textContent = count

},1000)


setInterval(()=>{
count = 10
},10000)
////////////////////////////////////////////////////////////////////////
  setTimeout(() => {
    clRed.style.backgroundColor = "red";
    console.log("hello");
  }, 1000);
//////////////////////////////////////////////////
  setTimeout(() => {
    clYellow.style.backgroundColor = "yellow";
    clRed.style.backgroundColor = "white"
    console.log("hello");
  }, 10000);


///////////////////////////////////////////
  setTimeout(() => {
    clGreen.style.backgroundColor = "green";
    clYellow.style.backgroundColor = "white"
    console.log("hello");
  }, 20000);
  setTimeout(() => {
    clGreen.style.backgroundColor = "white";
    clYellow.style.backgroundColor = "white"
    elBtn.textContent = "qaytadan"
    console.log("hello");
  }, 30000);
})


// var array = [0, 2, 4, 0 , 0  ] 

// function zerr(num) {
// var newArr = []
// for (i of num ) {
//   if ( i === 0) {
//     newArr.push(i)
//     console.log(newArr);
//   }else {
//   newArr.unshift(i)
//   }

// }





