# JavaScript Questions 

## Assignment 1

**_Q.1 What is Hoisting in Javascript?_**

**Ans-** Hosting is a direct consequence of lexical parsing that happens in JS, due to which we are able to access some functions & variables before declaring them. Which gives us a nation that they are moved up in the file.

_For Example_

```
function gun() {
     console.log(“Shoot”);
}
```

**_Q.2 Explain Temporal Dead Zone?_**

**Ans-** The Temporal Dead Zone (TDZ) refers to a behavior in JavaScript where variable cannot  be accessed or refernced before they are declared. This concept is specifically applied to variables declared using the `let` and `const` keywords.

_Here is an example to demonstrate the Temporal Dead Zone:_

```
console.log(myVariable); console.log(myVariable); // Throws ReferenceError: Cannot access 'myVariable' before initialization
let myVariable = 10;
let myVariable = 10;
```
In this example, we are trying to access `myVariable` before it has been initialized. This results in a `ReferenceError` being thrown.

The Temporal Dead Zone starts at the beginning of the block scope and ends when the variable is assigned a value. So, any referneces to the variable within that block scope, before the initialization, will throw an error.

It is important to note that this behaviour does not affect variables declared using `var`,as they are hoisted to the top of their scope and can be accessed before their initialization.

To avoid the Temporal Dead Zone, it is recommended to always declare variables at the beginning of their scope, before accessing or using them.

**_Q.3 Difference between var & let?_**

**Ans-** In JavaScript, both `var` and `let` are used to declare variables, but they have some key difference in terms of scope and hoisting:

_What do you mean by the word scope?_

In Simple words, scope is simply where to look for things-

_What are we looking for?_ We are looking for variables and functions.

*We have more or less 3 types of scopes in JavaScript.*

- **Global**
- **Function**
- **Block**

_**Global Scope**_

- If a variable is present in a global scope, then it is accessible every where in JS file.
- _But  how do we define a variable in global scopes?_ there are many ways - one of the way to declare/define variable outside any functions or a block.

_**Function Scope**_

- In a function, the visibility of a variable/function is test inside the outer function.

```
function fun() {
    var x = 10;
}
```

_**Block Scope**_

In JavaScript we can use a pair of curely braces to declare a block.

```
{

}
block - if else block while block for block row block. 
```

Now if a variable/function is only accessible/visible inside a block then it will be having block scope.

Hoisting is a direct consquence of lexical parsing that happens in JavaScript, due to which we are able to access some function & variables before declaring them. which gives us a notation that they are moved up in the file.

For Example: 

```
function gun() {
    console.log(“Shoot”);
}
```


**_Q.4 What are the major features introduced in ECMAScript 6?_**

**Ans-** ECMAScript 6, also known as ES6 or ECMAScript 2015, introduced several major features and enhancements to the JavaScript language. Some of the key features introduced in ECMAScript 6 are:

- **Let and Const Declarations**
- **Arrow Functions**
- **Classes**
- **Templates Literals**
- **Enhanced Object Literals**
- **Destructuring Assignment**
- **Default Parameters**
- **Rest and Spread Operators**
- **Modules**
- **Promises**


**_Q.5 What is the difference between `let` and `const` ?_**

**Ans-** In JavaScript, `let` and `const` are both used to declare variables, but they have some differences in terms of mutability and scope:

1. **Mutability:** Variables declared with `let` can be reassigned to a new value, while variables declared with `const` cannot be reassigned once they are assigned a value. This means that `let` variables are mutable, while `const` variables are immutable.

2. **Scope:** Both `let` and `const` variables have block scope, meaning they are only accessible within the block they are declared in. They are not hoisted to the top of their scope like `var` variables. However, there is a slight difference in terms of temporal dead zone. Variables declared with `let` are accessible only after their declaration and assignment, while variables declared with `const` are also subject to the temporal dead zone and can only be accessed after the declaration.

3. **Initialization:** Variables declared with `let` can be declared without an initial value and assigned later, while variables declared with `const` must be initialized with a value at the time of declaration. Once initialized, the value of a `const` variable cannot be changed.

_Here is an example that demonstrates the difference between `let` and `const`:_

```
let x = 10;
x = 20; // Valid reassignment

const y = 30;
y = 40; // Invalid, will throw an error
const z; // Invalid, must be initialized immediately
```

**_Q.6  What is template literals in ES6 and how do you use them?_**

**Ans-** In ECMAScript 6 (ES6), template literals are a new way to define and work with strings. They provide a more flexible and convenient syntax for creating dynamic strings by allowing for string interpolation and multiline strings.

_how do you use them?_

To define a template literal, you use backticks (`) instead of single or double quotes. Within a template literal, you can embed expressions or variables by using placeholders indicated by`${expression}`.

_Here's an example of using templte literals:_

```
const name = "Santoh Kumar";
const age = 20;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
```

```
Hello, my name is Santosh Kumar and I am 20 years old.
```

**_Q.7 What’s difference between map & forEach?_**

**Ans-** 

**map()**

- return value: undefined
- Original Array: not modified
- newArray is not created after the end of a method call
- forEach method is Not chainable

**forEach()**

- return value: newArray will be created based on you callback function
- Original Array: not modified
- newArray is not created after the end of a method call
- map method is Chainable

**_Q.8 How can you destructure objects and arrays in ES6?_**

**Ans-** In ES6, you can destructure objects and arrays using destructuring assignment. 

- Destructuring objects allows you to extract values from an object and assign them to variables in a single line. The syntax for object destructuring is `{ variable1, variable2 } = object`. Here's an example:

```
const person = { name: 'Santosh Kumar', age: 20 };

const { name, age } = person;

console.log(name); // Santosh Kumar
console.log(age); // 20
```

**_Q.9 How can you define default parameter values in ES6 functions?_**

**Ans-** In ES6, you can define default parameter values for a function by assigning a default value to the parameter in the function's parameter list. Here's an example:

```
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Anonymous!
greet('Santosh Kumar'); // Hello, Santosh Kumar!
```

**_Q.10 What is the purpose of the spread operator (...) in ES6?_**

**Ans-** In ES6, the spread operator (`...`) is used to expand an iterable object (like an array, string, or object) into individual elements. It allows you to easily manipulate arrays and objects by copying their elements and combining them with other elements.

_Some common use cases of the spread operator include:_

1. Copying an array or object:

```
const array = [1, 2, 3];
const copyOfArray = [...array];

const object = { x: 1, y: 2 };
const copyOfObject = { ...object };
```

2. Concatenating arrays:

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
```

3. Spreading elements of an array as arguments to a function:

```
const numbers = [1, 2, 3];
const maxNumber = Math.max(...numbers);
```

