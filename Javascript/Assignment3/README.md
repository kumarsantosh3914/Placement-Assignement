## Assignment 6

**_Q.1 What’s Constructor And Its Purpose?_**

**Ans-** In JavaScript, a constructor is a special method that is used to create and initialize an object created from a class. It is defined using the `class` keyword in ES6 syntax.

The purpose of a constructor is to set the initial state or values of an object when it is created. It is typically used to define and initialize the properties of the object. 

_Here's an example of a constructor in JavaScript:_

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Santosh", 20);
console.log(person.name);
console.log(person.age);

```
The constructor allow us to easily create objects with predefined initial values for their properties, making it convenient for object creation and initialization.

**_Q.2 Explain This Keyword and Its Purpose?_**

**Ans-** In JavaScript, the `this` keyword refers to the object that is executing the current function or method. It is a special contextual keyword that allow you to access and manipulate the properties and methods of the current object.

The purpose of `this` keyword is to provide a way to refer to the current object within the object's own methods or functions. It allows us to access the current object's properties and methods, making the code more dynamic and reusable.

For example: 

```
const person = {
  firstName: "Santosh",
  lastName: "Kumar",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: Santosh Kumar
```

In this example, the `fullName` method uses the `this` keywod to access the `firstName` and `lastName` properties of the `person` object. By using `this`, we can refer to the current object(`person`) and access its properties to construct the full name.

**_Q.3 What’s Call Apply Bind Method & Difference Between them_**

**Ans-** In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the `this` value of a function, allowing you to explicitly define the context in which the function should be executed. 

_Here is an explanation of each method and their differences._

1. `call`: The `call` method invokes a function with a specified `this` value and individual arguments passed after the 'this' value. The arguments should be provided as separate arguments, rather than as an array.

Example: 

```
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = {
  name: "Santosh",
};

greet.call(person, "Hello");
// Output: Hello, Santosh!
```

2. `apply`: The `apply` method works similar to `call`, but takes the `this` value as the first argument and allows you to provide arguments as an array or an array-like object.

Example: 

```
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

const person = {
  name: "Santosh",
};

greet.apply(person, ["Hello", "Santosh"]);
// Output: Hello, Santosh!

// The spread operator can also be used to pass an array-like object
greet.apply(person, [..."Hello", "Santosh"]);
// Output: Hello, Santosh!
```

3. `bind`: The `bind` method creates a new function with a specified `this` value and any initial arguments. It does not immediately invoke the function, but returns a new function that can be executed later.

```
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const person = {
  name: "Santosh",
};

const boundGreet = greet.bind(person, "Hello");

boundGreet();
// Output: Hello, Santosh!
```

_The key difference between `call`, `apply`, and `bind` lies in how the arguments are passed. With `call` and `apply`, the function is immediately invoked and the arguments are passed individually or as an array-like object. With `bind`, a new function is returned with the bound `this` value and initial arguments, which can be invoked later._

**_Q.4 Explain OOPS ?_**

**Ans-** OOPS stands for Object-Oriented Programming System. It is a programming paradigm that focuses on representing real-world entities as objects and enables the use of concepts like encapsulation, inheritance, and polymorphism to create reusable and modular code.


**_Q.5 Whats Abstraction and Its Purpose?_**

**Ans-** Abstraction is a fundamental concept in object-oriented programming (OOP) that allows you to model real-world entities in a simplified manner. It involves hiding the complex implementation details of an object or a system, and providing a simplified interface to interact with it.

The purpose of abstraction:

- Simplify Complexity
- Encapsulate Data
- Achieve Code Reusability

**_Q.6 Whats Polymorphism and Purpose of it?_**

**Ans-** Polymorphism is a concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. It refers to the ability of a single interface or base class to have multiple implementations.

_The purpose of polymorphism is to improve code reusability, flexibility, and extensibility._

**_Q.7  Whats Inheritance and Purpose of it?_**

**Ans-** Inheritance is a key concept in object-oriented programming (OOP) that enables the creation of a hierarchy of classes. It allows a subclass to inherit properties and behaviors from its superclass, thereby promoting code reuse and creating a relationship between classes.

The purpose of inheritance: 

- Code Reusability
- Modularity and Organization
- Enhancement and Extension
- Polymorphism

**_Q.8 Whats Encapsulation and Purpose of it ?_**

**Ans-** Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling related data (attributes) and methods (behaviors) into a single unit called an object. It is a way to achieve data hiding and restrict access to the internal workings of an object.

The purpose of encapsulation: 

- Data Protection
- Modularity 
- Code Flexibility
- Code Readability


**_Q.9 Explain Class in JavaScript?_** 

**Ans-** In JavaScript, a class is a syntactical construct introduced in ECMAScript 2015 (ES6) to provide a more convenient and intuitive way to define objects and their behaviors. It allows you to define blueprints for creating objects with properties and methods.

Here's an example of a class in JavaScript:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating objects from the class
const person1 = new Person("Santosh", 20);
const person2 = new Person("Saket", 30);

// Accessing properties and invoking methods on the objects
console.log(person1.name); // Output: Santosh
console.log(person2.age); // Output: 30
person1.sayHello(); // Output: Hello, my name is Santosh and I am 20 years old.
person2.sayHello(); // Output: Hello, my name is Saket and I am 30 years old.
```

**_Q.10 What’s Super Keyword & What it does?_** 

**Ans-** In JavaScript, the `super` keyword is used to call functions or access properties of a parent class within a subclass. It is specifically used in class constructor methods to invoke the constructor of the parent class.

When a class extends another class, the subclass inherits the properties and methods of the parent class. In the constructor of the subclass, the `super` keyword can be used to invoke the constructor of the parent class and pass any required arguments.

Here's an example to illustrate the usage of the `super` keyword:

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log('Making sound.');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // invoking parent class constructor
    this.breed = breed;
  }
}

const myDog = new Dog('Max', 'Golden Retriever');
console.log(myDog.name); // Output: Max
console.log(myDog.breed); // Output: Golden Retriever
myDog.sound(); // Output: Making sound.
```
