// https://javascript.info/promise-basics
// https://learn.javascript.ru/promise-basics

let stasPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 2000);

  // setTimeout(() => reject(new Error("Whoops!")), 2000);
});

// stasPromise.then(
//     function(result){
//         console.log(result);
//     },
//     function(error){
//         console.log(error);
//     }
// )

stasPromise
  .finally(() => console.log("Promise completed"))
  .then(
    result => {
      console.log(result);
    },
    error => {
      console.log(error);
    }
  );
