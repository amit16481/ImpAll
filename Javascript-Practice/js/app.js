// function sumer(a, b) {
//    var sum = a + b;
//    document.getElementById("demo").innerHTML = sum;
//    console.log(sum);
//    return sum;
   
// }
// function test(a, b, callBack) {
//     callBack(a, b);
// }
// test(15, 17, amit);

// function amit(){
//     console.log("Finally Done");
// }

// var age = 18;
// if(age<=19){
//     if(age<=50){
//         console.log("Wow");
//     }
//     else {
//         console.log("Sorry yar");
//     }
// }
// else {
//     console.log("You are a not eligible");
// }

// for(var i=1; i<6; i++){
//     var str ="";
//     for(var j=1; j<6; j++){
//         str = str + j;
//         console.log(str);
//     }
//     console.log(i,str);
   
// }

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data ID: " + dataId);
            resolve("Success");
            //reject("Error");
            if(getNextData){
                getNextData()
            }
            
            
        },5000)
    })
    
}
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     });
// });


////////////////////////////// Promise function start here/////////////////////////////////////////////////////

// let myPromise = new Promise((resolve, reject) => {
//     console.log("I am Promise");
//      resolve("Success");
//     // reject("Some error");
// });



// function asyncF() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             res("Success");
//         },3000)
//     });
// }

// function asyncF2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             data = {
//                 "name": "Amit",
//                 "blogs":[
//                     "Node","Angular","React","Strapi","Javascript"
//                   ]
//             }
//             res("Success");
//         },3000)
//     });
// }
// console.log("Fetching data 1....")
// asyncF().then((res) => {
//     console.log("Fetching data 2....")
//     return asyncF2();
// }).then((res) => {
//     console.log(data.name);
//     console.log(data.blogs[1]);
//     console.log(res);
// });


//  let p1 = asyncF();
// console.log("Fetching data 1....")
//     p1.then((res)=> {
//         console.log("Fetching data 2...")
//         let p2 = asyncF2();
//         p2.then((res) => {
//             console.log(data.name);
//         });
//     }); 
//     p1.catch((rej)=> {
//         console.log("Some error aa gya hoga");
//     });
    
////////////////////////////// async await function start here/////////////////////////////////////////////////////

function hello() {
    return new Promise((res, reject) => {
        console.log("Weather Data");
        res(200);
    })
}
