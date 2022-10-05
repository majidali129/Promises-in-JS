// 'https://community-citybikes.p.rapidapi.com/valenbisi.json' 
// const countriesAPI = 'https://restcountries.com/v2/all'


// let xhr = new XMLHttpRequest();
// xhr.open("GET",countriesAPI);
// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState==4){
//         console.log(xhr.readyState)
//         let response = xhr.response;
//         let countriesData = JSON.parse(response);
//         let name,capital,languages,population,area;
//         for(let i=0; i<countriesData.length; i++){
//         // console.log(countriesData[i].name)
//         name = countriesData[i].name
//         capital = countriesData[i].capital
//         languages = countriesData[i].languages
//         population = countriesData[i].population
//         area = countriesData[i].area
//         console.log(name,capital,languages,population,area)
//        }

//         // console.log(countriesData) 
//         // console.log(response)
//         // console.log(xhr)
//     }
// }


// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// let xhr = new XMLHttpRequest();
// xhr.open("GET",catsAPI);

// console.log(xhr)
// xhr.onload= ()=>{
//     if(xhr.readyState==4){
//         if(xhr.status==200){
//             let response = xhr.response;
//             let catsInfo = JSON.parse(response);
//             for(let i=0; i<catsInfo.length; i++){
//                 let catNames = catsInfo[i].name;
//                 console.log(` Cat name is : ${catNames}`)
//             }

//             // console.log(data)
//         }else{
//             console.log("something went wrong")
//         }
//     }else{
//         console.log("something went wrong from the user")
//     }
// };
// xhr.onerror=()=>{
//     let error = new Error("There might be a newtork issue")
//     console.log(error.message)
// }
// xhr.send();


// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(catsAPI)
// .then((response)=>{
//     console.log(response)
//     console.log("then working")
//     if(response.ok){
//         let data = response.json();
//         return data
//     }else{throw new Error("invalid url")}

// }).then(acturaData=>{
//     for(let i=0; i<acturaData.length; i++){
//         console.log(acturaData[i].name)
//     }

// }).catch(error=>{
//     console.log("catch")
//     console.log(error)
// })


// let URL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';

// let xhr = new XMLHttpRequest();
// console.log(xhr)
// xhr.open("GET",URL);
// xhr.onreadystatechange = ()=>{
//     // console.log(response)
//     console.log(xhr.status)
//     console.log(xhr.readyState)
// }
// xhr.send();

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd8ef886044msh41d845fa9acd63ep1eb825jsnc6ceabb1a308',
// 		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
// 	}
// };

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd8ef886044msh41d845fa9acd63ep1eb825jsnc6ceabb1a308',
// 		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
// 	}
// };

// fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
// 	.then(response => response.json())
// 	.then(response =>{
//         let data = response;
//         console.log(data)
//     })
// 	.catch(err => console.error(err));



