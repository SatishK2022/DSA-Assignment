# Assignment 5

### Q.1 What’s difference between Synchronous and Asynchronous?
Ans- Synchronous is a blocking architecture. The execution of the code is dependent upon the previous code to complete.

Asynchronous is a non-blocking architecture. The execution of the code is not dependent on any code. It can run simultaneously.


### Q.2 What are Web Apis ?
Ans- The web api helps to access data from the different internet devices like browers, mobile apps, and other devices.


### Q.3 Explain SetTimeOut and setInterval ?
Ans- setTimeOut() is an asynchronous function which is used to do the work asynchronously.

***For Example:-***
```javascript
setTimeOut(() => {
    console.log("Hello World");
}, 2000)
```

`setTimeOut()` accepts two arguments first is a callback and second is the time.
Here `() => {console.log("Hello World")}` is a callback and `2000` is the time in miliseconds.
This code will execute after waiting 2 sec.


`setInterval()` is an asynchronous function which is used to do the work asynchronously.

***For Example:-***
```javascript
setInterval(() => {
    console.log("Hello World");
}, 2000)
```

setInterval() accepts two arguments first is a callback and second is the time.
Here `() => {console.log("Hello World")}` is a callback and `2000` is the time in miliseconds.
This code will execute continuously in 2 sec.


### Q.4 how can you handle Async code in JavaScript ?
Ans- To Handle async code we have two concepts we can Use `.then().catch()` chaining or we can use `async` `await`.


### Q.5 What are Callbacks &  Callback Hell ?
Ans- ***Callback:-*** A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced.

***Callback Hell:-*** When multiple callbacks are called inside the callback is called as callback Hell.

For Example:-
```javascript
firstFunc(args, function(){
    secondFunc(args, function(){
        thirdFunc(args, function(){
            // This code will run like this
        })
    })
})
```


### Q.6 What are Promises & Explain Some Three Methods of Promise.
Ans- Promises are the asyncronous code which is used to handle the asynchronous code.

We handle the promise by usnig three method `.then()` when the promise is resolved `.catch()` when the promise is rejected and `.finally()` in both the cases.

```javascript
// Create promise
const ticket = new Promise((resolve, reject) => {
    let isBoarded = false;
    if(isBoarded){
        resolve('You are in the flight')
    } else{
        reject('Your flight is cancelled')
    }
})

// Handle Promise
ticket
    .then((data) => {
        console.log(`${data} Whoo`)
    })
    .catch((data) => {
        console.log(`${data} Ohh no`)
    })
    .finally(() => {
        console.log(`I will always be executed`)
    })
```


### Q.7 What’s async & await Keyword in JavaScript
Ans- Async & await keyword is a way to write the asynchronous block of code in javascript.

For Example:-
```javascript
const getData = async () => {
    let data = "Hello";
    return data;
}

getData().then((data) => {
    console.log(data)
})
```


### Q.8 Explain Purpose of Try and Catch Block & Why do we need it?
Ans- `try()` and `catch()` block is used to handle the error while executing the code. If we know that there can be an error in the code than we wrap it in the `try()` block and then handle it using `catch()` block.

For Example:-
```javascript
try{
    // code
} catch(err){
    console.log(err);
}
```


### Q.9 Explain fetch.
Ans- The `fetch()` method is used to fetch the data from the server.

For Example:-
```javascript
// fetching the file from the server
fetch(file)
```


### Q.10 How do you define an asynchronous function in JavaScript using async/await?
Ans- 
```javascript
async factorial(n) {
    if(n == 0){
        return 1;
    } else {
        return n * await factorial(n - 1);
    }
}
```