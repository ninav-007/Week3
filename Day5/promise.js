//Task1
let promise = new Promise ((resolve, reject)=> {

    let success = true;

    if (success) {
        resolve("Operation successfull");
    }
    else{
        reject("Something wrong!")
    }

});

promise 
  .then(result => {
    console.log("success:",result);
  })
  .catch(error =>{
    console.error("Error:",error);    
  })
  .finally(() => {
    console.log("Operation completed.");
    
  })



//Task2

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 5000);
  });
}

fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));
