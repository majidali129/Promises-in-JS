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



// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// let catsData = fetch(catsAPI);
// catsData.then(response=>{
//     let jsonData = response.json();
//     return jsonData;
// }).then(actualResponse=>{
//     // console.log(actualResponse);
//     let data = actualResponse;
//     for(let i=0; i<data.length; i++){
//         // console.log(data[i]['weight'].metric[i] + data[i]['weight'].metric[i+1])
//         if(i==50){
//             console.log(data[i].weight['metric'])
//         }
//     }
// })

// async function findCountry(){
    // const countriesAPI = 'https://restcountries.com/v2/all'
//     let countryData = await fetch(countriesAPI);
//     let response = await countryData.json();
//     return response;
// }

// findCountry().then(response=>{
//     let countries = response;
//     let listOfAreas = [];
//     let biggest_country = [];
//     for(let i=0; i<countries.length; i++){
//         if(countries[i].population != undefined){
//             listOfAreas.push(countries[i].population);
//         }
//     }
//     console.log(countries)
//     console.log(listOfAreas)
//     listOfAreas.filter(Area=>{
//         if(listOfAreas[Area] > listOfAreas[Area + 1] ){
//             biggest_country.push(listOfAreas[Area])
//         };
//     })
//     console.log(biggest_country)
// })
// languages in the world used as officials.


// const countriesAPI = 'https://restcountries.com/v2/all'

// let countLanguages = fetch(countriesAPI);
// countLanguages.then(response=>{
//     let countriesData = response.json();
//     return countriesData;
// }).then(actualData =>{
//     let data = actualData;
//     let allLanguages = [];
//     let language_collection = [];
//     // console.log(data.languages)
//     for(let i=0; i<data.length; i++){
//        allLanguages.push(data[i].languages)
//     }
//     allLanguages.filter(language=>{
//         let languageData = language;
//         // console.log(languageData)


//         for(let i=0; i<languageData.length; i++){
//                 // console.log(languageData[i].name)
//                 language_collection.push(languageData[i].name);
//         }
//     })
//     let unique_languages = new Set(language_collection);
//     console.log(data)
//     console.log(language_collection)
//     console.log(unique_languages)
//     console.log(`Data : ${data.length}`)
//     console.log(`Language_collection : ${language_collection.length}`)
//     console.log(`Unique_languages : ${unique_languages.size}`)

// })






