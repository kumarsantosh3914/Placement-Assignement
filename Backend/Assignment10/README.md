## Assignment Questions 10 

**_Q.1 Explain Middlewares in NodeJS ?_**

**Ans-** In Node.Js, middlewares are functions that allow you to intercept and process incoming HTTP requests and outgoing HTTP response. They provide a way to add functionality to your application's request-response cycle, such as logging, authentication, error handling, and more.

- Middlewares are excuted sequentialy in the order they are defined and can modify the request or response objects, pass control to the next middleware, or terminate the request-response cycle.

**_Q.2 Why use Express Over NodeJS ?_**

**Ans-** Express is a web application framework for Node.js which means it is built on top of the Node.js runtime environment. Express provides a set of features and utilities that make it easier to build web applications using Node.js.

_Here are some reasons why you might choose to use Express over using row Node.js._

1. **Simplicity and ease of use**: Express provides a minimalist and intuitive API for building web applications. It simplifies common tasks such as routing, handling HTTP requests and responses, parsing request bodies, and managing session data.

2. **Modularity and extesnsiblity**: Express allows you to use middleware functions to modularize and organize your application's code. Middlewares can be easily plugged into the application's request-response cycle, allowing you to add functionality such as authentication, error handling, logging, and more.

3. **Flexible routing**: Express provides a powerful routing system that allows you to define routes for different HTTP methods and URLs. You can use pattern matching, parameter extraction, and route handlers to create sophisticated and flexible routing logic.

**_Q.3 What are REST API ?_**

**Ans-** REST (Representational State Transfer) is an architectural style used to design networked applications. REST APIs (Application Programming Interfaces) are a set of rules and conventions for building and interacting with web services that follow the principles of REST.

**_Q.4 What is the use of MongoDB?_**

**Ans-** MongoDB is a popular NoSQL (non-relational) database management system that is widely used in modern web development and other applications. It serves as flexible and scalable solution for storing and managing data. 

_The primary use of MongoDB includes:_

1. **Document Storage**: MongoDB stores data in a format called BSON (Binary JSON), which allows for flexible and nested data structures. Data is organized into documents, which can very in structure, unlike traditional relational databases.
2. **Scalability**: MongoDB is designed to scale horizontally by distributing data across multiple servers or nodes. This allows it to handle large amounts of data and high levels of traffic efficiently.
3. **Performance**: Due to its schema-less nature and flexible data model, MongoDB can provide fast read and write operations, making it suitable for real-time applications.
4. **Aggregation Framework**: MongoDB includes a powerful aggregation framework that allows for advanced data processing and analysis, including grouping, filtering, and other aggregation operations.
5. **High Availability**: MongoDB supports replica sets, which are a group of MongoDB instances that maintain copies of the same data. This provides high availability and automatic failover in case of node failures.

**_Q.5  What is Mongoose and how does it relate to MongoDB?_**

**Ans-** Mongoose is an Object-Data Mapping (ODM) library for Node.js that provides a higher-level abstraction over the MongoDB driver. It simplifies the interaction with MongoDB and allows developers to work with MongoDB in a more straightforward and intuitive way, using JavaScript objects and schemas.

_Here's how Mongoose relates to MongoDB:_

1. **Schema and Models**: In MongoDB, data is stored in BSON(Binary JSON) documents, and each document can have a different structure. Mongoose introduces the concept of a schema, which defines the structure of the documents in a collection. Schemas allow you to enforece data types, set default values, define validators, and create relationships between collections. Mongoose models are JavaScript classes that wrap the MongoDB collections and provide an interface to interact with them using CRUD (Create, Read, Update, Delete) operations.
2. **Validation and Middleware**: Mongoose offers built-in validation features, allowing you to define constraints for your data before it is saved to the database. Additionally, you can define middleware functions that run before or after certain operations, giving you control over data transformation and business logic.
3. **Query Building**: Mongoose provides a rich query API that allows you to build complex queries to retrieve data from MongoDB. It enables you to chain multiple query conditions, sorting, pagination, and more, making it easier to interact with the database.
4. **Relationships**: MongoDB is a schema-less database, which means it doesn't support relationships between collections like traditional relational databases. Mongoose allows you to create references and establish relationships between models, enabling you to handle related data more effectively.
5. **Middleware**: Mongoose allows you to define middleware functions that can intercept certain events like pre-save, post-save, pre-remove, etc, which gives you more control over the data lifecycle.

**_Q.6 Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data_**

- send msg as “Welcome to Men & Women Dummy Data”
- ‘/men’ → send 10 products data of men
- ‘/women’ → send 10 products data of women
- ‘/other’ → send response as page not found

**Note :** You Can any Product Data
