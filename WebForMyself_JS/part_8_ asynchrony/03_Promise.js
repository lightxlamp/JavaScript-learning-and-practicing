/* 
    Client -> Server -> Database -> Server -> Client
*/

// // Client 
// console.log('Client: want to receive a list of pizzas');
// console.log('....');

// // Server
// setTimeout(() => {
//     console.log('Server: asking a list of available pizzas from DB');
//     console.log('....');

//     // DB
//     setTimeout(() => {
//         console.log('DB: preparing list');
//         console.log('....');

//         // Server
//         setTimeout(() => {
//             console.log('Server: transforming format of data');
//             console.log('....');
            
//             // Client
//             setTimeout(() => {
//                 console.log('Client: receiving data and displaying it');
//                 console.log('....');
//             }, 1000)

//         }, 500)
         
//     }, 500)

// }, 1000)

// Promises
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Server: asking a list of available pizzas from DB');
        console.log('....');         
        resolve();
    }, 1000);
});

promise.then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('DB: preparing list');
            console.log('....');
            resolve();
        }, 500);
    })
}).then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Server: transforming format of data');
            console.log('....');
            resolve();
        }, 500);
    })
}).then(function() {
    setTimeout(() => {
        console.log('Client: receiving data and displaying it');
        console.log('....');
    }, 1000);
}).catch().finally()

// Although we receoved more code, but it is more convenient to work with it
// Promises can be transfered between files/modules easily 
// catch - when error occured..
// finally when all async actions performed and some action should be perfomed anyway