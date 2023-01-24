import Notiflix, { Notify } from 'notiflix';

const inputForm = document.querySelector('form')

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve ({position, delay})
    } else {
      reject ({position, delay})
    }
    }, delay);
  })
}

 
function runCreatePromises(event) {
  e.preventDefault();
  const inputData = new FormData(event.currentTarget);
  const option = {};

  for (const [key, value] of inputData.entries()) {
    option[key] = Number(value);
  }

  let { amount, step, delay } = option;

  for (let i = 1; i <= amount; i += 1) {
     createPromise(i, delay).then(onSuccess).catch(onError);
    delay += step;
    inputForm.reset();
  }
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

inputForm.addEventListener('submit',runCreatePromises)
























// const promisesProperty = {
//   delay: "",
//   step:"",
//   amount:""
// // }
// // // let delay = 0;
// // // let step = 0;
// // // let amount = 0;
// inputForm.addEventListener('input', checkProperty)

// function checkProperty(event){
//   promisesProperty[event.target.name] = event.target.value;
//   return promisesProperty;
// }
// console.log(promisesProperty)
// // let {delay, step, amount} = promisesProperty

// // createPromiseBtn.addEventListener('submit', submitProperty)
// // function submitProperty() {
// //   preventDefault();
  
// //   console.log(promisesProperty)
// //   // console.log(step)
// //   // console.log(amount)

// // }
// // console.log(promisesProperty) 




// const createPromise = (event) => {
//   event.preventDefault()
//     setTimeout(() => {
//       return new Promise ((resolve, reject) => {
//         const shouldResolve = Math.random() > 0.3;
//           if (shouldResolve) {
//            resolve (`✅ Fulfilled promise ${position} in ${delay}ms`)
//           } else 
//           reject ((`❌ Rejected promise ${position} in ${delay}ms`))
//     }
//      ,delay)
//      position +=1
//      delay +=step
//   })

//   createPromise ()
//   .then( result => Notify.success(result))
//   .catch(error => Notify.failure(error))
//   createPromiseBtn.addEventListener('submit', createPromise)
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });