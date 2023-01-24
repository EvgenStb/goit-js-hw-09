import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix, { Notify } from 'notiflix';



const datePicker = document.getElementById('datetime-picker')
const startBtn = document.querySelector('button[data-start]')

startBtn.disabled = true

let timerId = null;


const timerRefs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
        if (selectedDates[0]< options.defaultDate) {
      Notify.failure("Please choose a date in the future");
      startBtn.disabled = true
    } else {
      options.defaultDate = selectedDates[0]
      startBtn.disabled = false
    }
  },
};
flatpickr(datePicker, options);
startBtn.addEventListener('click', changeTimerValue)


function changeTimerValue () {
    timerId = setInterval (() => {
    let countdown = options.defaultDate - new Date();
      startBtn.disabled = true;
      datePicker.disabled = true
      
      if (countdown >= 0) {
        let timerDate = convertMs(countdown);
        timerRefs.days.textContent = addZero(timerDate.days);
        timerRefs.hours.textContent = addZero(timerDate.hours);
        timerRefs.minutes.textContent = addZero(timerDate.minutes);
        timerRefs.seconds.textContent = addZero(timerDate.seconds);
      } else {
        clearInterval(timerId)
        datePicker.disabled = false;
      }
  }, 1000)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero (value) {
  return String(value).padStart(2, '0')
}






















// console.log(options.onClose());

// let curentData;
// let selectData;

// // startBtn.addEventListener('click', startTimer);
// inputCountdownValue.addEventListener('input', setTimerValue);

// function setTimerValue (event) {
//   selectData = event.target.value;
//   console.log(selectData)
//   // curentData = Data.now();
//   // return console.log(curentData - selectData)
// }





