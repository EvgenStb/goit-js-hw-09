import {getRandomHexColor} from "./hexgenerator"
const body = document.querySelector('body')
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')

let timerId = null;
    
stopBtn.disabled = 'false'


startBtn.addEventListener('click', () => {
    startBtn.disabled = 'true';
    stopBtn.removeAttribute('disabled', 'disabled');
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = 'false';
    stopBtn.disabled = 'true';
    clearInterval(timerId);
});









//=====================================================

// startBtn.addEventListener('click', colorChangeSwicher)

// function changeBodyColor (){
//     body.style.backgroundColor = getRandomHexColor();
// }

// function startBtnDisabled() {
//     startBtn.setAttribute('disabled', 'disabled')
// }

// function colorChangeSwicher (){
//     startBtnDisabled();
//     setInterval(changeBodyColor (), 1000)
// }


// stopBtn.addEventListener('click', stopColorSwitcher);

//   function stopColorSwitcher () {
//     startBtn.removeAttribute('disabled', 'disabled')
//     clearInterval(timerId);
//   }




// function colorChangeSwicher (timerId) {
// startBtn.setAttribute('disabled', 'disabled')
// timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//  }, 1000);
// }

// console.log(timerId)
  

 
