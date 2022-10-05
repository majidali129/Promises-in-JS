// promise syntax 
// let myPromise = new Promise((resolve,reject)=>{})

// let condition = true;
// let myPromise = new Promise((resolve,reject)=>{
//     if(!condition){
//         resolve("promise has been resolved");
//     }else{
//         let failure = new Error("Promise rejected");
//         console.log(failure)
//     }
// });

// myPromise.then(fulfilled=>{
//     console.log(fulfilled)
// }).catch(error=>{
//     console.log(error.message)
// })

// // ES5: Full example

// var isMomHappy = false;

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// // 2nd promise
// var showOff = function (phone) {
//     var message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';

//     return Promise.resolve(message);
// };

// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//     .then(showOff) // chain it here
//     .then(function (fulfilled) {
//             console.log(fulfilled);
//             // output: 'Hey friend, I have a new black Samsung phone.'
//         })
//         .catch(function (error) {
//             // oops, mom don't buy it
//             console.log(error.message);
//             // output: 'mom is not happy'
//         });
// };

// askMom();


//  console.log(typeof Promise)


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd8ef886044msh41d845fa9acd63ep1eb825jsnc6ceabb1a308',
// 		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
// 	}
// };

// fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd8ef886044msh41d845fa9acd63ep1eb825jsnc6ceabb1a308',
// 		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
// 	}
// };

// fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));









































































