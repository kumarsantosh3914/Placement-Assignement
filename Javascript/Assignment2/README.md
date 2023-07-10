## JavaScript Assignment 2

**_Q.1 What’s difference between Synchronous and Asynchronous?_**

**Ans-** In JavaScript, synchronous code, each operations is refer to how code execution is managed.

1. Synchronous: In synchronous code, each operation is performed one at a time. The program waits for each operation to complete before moving on to the next one. This means that the code execution is blocking, and tasks have to wait until the current  task is finished.

_Here's an example of synchronous code:_

```
console.log('Start');

// Synchronous operation
console.log('Operation 1');
console.log('Operation 2');

console.log('End');
```
In this example, the output will be: 
```
Start
Operation 1
Operation 2
End
```

2. Asynchronous: In asynchronous code, operations are non-blocking and can be performed concurrently or in the background. The program doesn't wait for an operation to complete before moving on to the next one. Instead, it registers a callback function or uses Promises to handle the result once it's available.

_Here's an example of asynchronous code using callbacks:_

```
console.log('Start');

// Asynchronous operation using callback
setTimeout(function() {
  console.log('Operation 1');
}, 2000);

console.log('Operation 2');

console.log('End');
```
In this example, the output will be: 

```
Start
Operation 2
End
Operation 1 (after 2 seconds delay)
```
As you can see, the "Operation 1" is delayed by 2 seconds, but the program continues executing the rest of the code without waiting. Once the delay expries, the callback function is invoked.

Asynchronous code is usefull when dealing with time-consuming operations such as making API calls, reading files, or handling user input. It allows non-blocking execution, preventing the program from freezing or becoming unresponsive while waiting for a taks to complete.


**_Q.2 What are Web Apis ?_**

**Ans-** Yes, that statement is correct. Web APIs are indeed sets of rules and protocols that allow different software applications to communicate and interact with each other. In the context of web development, Web APIs specifically refer to a collection of interfaces and protocols provided by web browsers, which allow developers to interact with web-related features and services such as retrieving data from a server, manipulating the DOM, accessing geolocation information, and much more.

**_Q.3 Explain SetTimeOut and setInterval ?_** 

**Ans-** `setTimeout` and `setInterval` are two functions in JavaScript that allow you to implement timing and scheduling behavior in your code. These two functions are not by default given to us by JavaScript._Then how are able to use it ?_

1. `setTimeout`: It is a function that helps to execute some task on ce after a certain times.

Syntax: 
```
setTimeout(taskCallback, timemili second);
```
_Here's an example of `setTimeout`_

```
setTimeout(function() {
    console.log("Hello");
}, 3000);
```

2. `setInterval`: It is a function that helps us to execute some task again & again after a certain interval.

Syntax: 

```
setInterval(taskCallback, interval in mili second);
```

_Here's an example of `setInterval`:_

```
console.log('Start');

var intervalId = setInterval(function() {
  console.log('Repeated operation');
}, 1000);

setTimeout(function() {
  clearInterval(intervalId); // Stop the interval after 5 seconds
  console.log('Interval stopped');
}, 5000);

console.log('End');
```
In this example, the output will be: 

```
Start
End
Repeated operation (every 1 second)
Repeated operation (every 1 second)
Repeated operation (every 1 second)
Repeated operation (every 1 second)
Interval stopped
```

**_Q.4 how can you handle Async code in JavaScript ?_**

**Ans-** In JavaScript, there are several ways to handle asynchronous code. Here are a few common approaches.

1. Callbacks: You can use callback functions to handle asynchronous operations. In this approach, you provide a function as an argument to an asynchronous function, and that function will be called when the asynchronous operation completes. 

For Example: 

```
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Hello, World!';
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
```

2. Promises: Promises provided a more structured way to handle asynchronous code. With promises, you can chain operations and handle both success and error cases using `.then()` and `.catch()` methods.

For example: 

```
function fetchData(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Downloading completed");
            resolve(data);
        }, 7000);
    });
}

downloadPromise = fetchData("www.google.drive.com");
downloadPromise.then(function processDownload(value) {
    console.log("downloading done with following value", value);
}).catch(error => {
    console.log(error);
});
```

3. Async/await: The async/await syntax provided a more concise way to write asynchronous code. You can use the `async` keyword before a function declaration to mark it as an asynchronous function, and use the `await` keyword to wait for a promise to resolve before continuing.

For example: 

```
async function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Hello, World!';
      resolve(data);
      // Or reject(new Error('Something went wrong'));
    }, 1000);
  });
}

async function handleData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

handleData();
```


**_Q.5 What are Callbacks &  Callback Hell ?_**

**Ans-** Callbaks are a common pattern used in JavaScript to handle asynchronous operations. A callback function is a function that is provided as an argument to another function and is invoked when a specific event or action occurs.

In the context of asynchronous operations, callbacks are often used to handle the result or error of an asynchronous function. For example, when making an HTTP request you can provide a success callback function that will be called when the request is successful, and an error callback function that will be called if the request fails.

Here's an example the demonstrates the callbacks:

```
function fetchData(successCallback, errorCallback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const error = false;
    if (error) {
      errorCallback(new Error('Something went wrong'));
    } else {
      const data = 'Hello, World!';
      successCallback(data);
    }
  }, 1000);
}

function handleSuccess(data) {
  console.log('Success:', data);
}

function handleError(error) {
  console.error('Error:', error.message);
}

fetchData(handleSuccess, handleError);
```

- Callback Hell: Callback Hell, also known as the Pyramid of Doom, is a common term used to describe the situation when using multiple nested callbacks, leading to code that is hard to read, understand, and maintain. This often occurs when dealing with multiple asynchronous operations that depend on each other.

_Here's an example that demonstrates Callback Hell:_

```
asyncFunction1((result1) => {
  asyncFunction2(result1, (result2) => {
    asyncFunction3(result2, (result3) => {
      // and so on...
    });
  });
});
```

**_Q.6 What are Promises & Explain Some Three Methods of Promise_**

**Ans-** Promises are a feature in JavaScript that help handle asynchronous operations in a more structured and readable way. A promise represents the eventual completion (or failure) of an asynchronous operation, and allows you to handle the result or error of that operation.

_There are three methods available on promises to work with them effectively:_

1. `then()`: `.then()` methods is used to handle the successful completion of a promise. It takes two optional callback functions as an arguments. The first callback is called when the promises is fullfilled, and it receives the resolved value as an argument. The second callback is called when the promise is rejected, and it receives the error as an argument. 

Example: 

```
promise.then((resolvedValue) => {
    console.log('Promise fulfilled:', resolvedValue);
   }, (error) => {
    console.error('Promise rejected:', error);
   });
```

2. `.catch()`: The `catch()` method is used to handle the error or rejection of a promise. It is similar to the second callback function of the `then()` method, but is more readable and easier to chain with other promise methods. It is often used at the end of a promise chain to catch any error that might have occured.

Example: 

```
promise
     .then((resolvedValue) => {
       console.log('Promise fulfilled:', resolvedValue);
     })
     .catch((error) => {
       console.error('Promise rejected:', error);
     });
```

3. `finally()`: The `finally()` method is used to perform an action regardless of whether the promise is fulfilled or rejected. It is called after the `then()` or `catch()` method, and receives no arguments. It allows you to clean up resources or perform any necessay final tasks.

Example: 

```
promise
     .then((resolvedValue) => {
       console.log('Promise fulfilled:', resolvedValue);
     })
     .catch((error) => {
       console.error('Promise rejected:', error);
     })
     .finally(() => {
       console.log('Promise completed');
     });
```


**_Q.7 What’s async & await Keyword in JavaScript_** 

**Ans-**  The `async` and `await` keywords in JavaScript provide a more concise and readable way to work with asynchronous code, especially when dealing with Promises.

- The `async` keyword is used to declare an asynchronous function. An asynchronous function is a special type of function that can pause execution by using the `await` keyword inside it. It automatically wraps the return value in a Promise, allowing you to use the `then()` method to handle the resolved value or the `catch()` method to handle any errors.

- The `await` keyword is used to pause the execution of an asynchronous function until a Promise is resolved. It can only be used inside an `async` function. When `await` is used on a Promise, it will suspend the execution of the `async` function until the Promise is settle (either fulfilled or rejected). When the Promsie is resolved, `await` will return the value of the resolved promise.

_Here's an example that demonstrate the usages of `async` and `await`_

```
async function fetchData() {
  try {
    const response = await fetch('https://api/dummy/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
```


**_Q.8 Explain Purpose of Try and Catch Block & Why do we need it?_** 

**Ans-** The purpose of the try and catch block in JavaScript to handle and manage error or exceptions that may occur during the execution of a code block.

_Why do you need it?_
When you have a section of code that could potentially generate an exception or an error, you can wrap it inside a try block. If an error occurs within the try block, it is caught and the corressponding catch block is executed. The catch block allows you to handle the error gracefully by providing an alternative course of action or displaying an error message to the user.

_Here's are some ressons why we need try and catch blocks in JavaScript:_

- Error handling
- Debugging
- Robustness

**_Q.9 Explain fetch_**

**Ans-** The `fetch()` function is a built-in JavaScript method for making netwrok requrests or fetching resourcess from a server. It is commonly used to retrive data from an API or send data to a server.

Here's basic example of how to use the `fetch()` function to retrieve data from an API:

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.log(error);
  });
```

**_Q.10 How do you define an asynchronous function in JavaScript using async/await?_**

**Ans-** To define an asynchronous function in JavaScript using the `async/await` syntax, you declare the function with the `async` keyword before the function keyword. Then within the function, you can use the `await` keyword before any asynchronous operation (such as a promise-based function) to pause the function execution until the promise is resolved.

_Here's an example of defining an asynchronous function using `async/await`:_

```
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```