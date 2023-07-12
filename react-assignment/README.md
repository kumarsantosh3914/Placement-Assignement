## React Assignment 8

**_Q.1  Whats React and its pros and cons?_**

**Ans-** React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is known for its component-based architecture, which allows developers to build reusable UI components and manage the application state efficiently.

Here are some pros and cons.

Pros: 

1. Virtual Dom
2. Reusable Components
3. JSX
4. Unidirectional Data Flow

Cons: 

1. Learning Curve
2. Boilerplate Code
3. Tooling

**_Q.2 What do you understand by Virtual Dom?_**

**Ans-** In ReactJS, the Virtual DOM(Document Object Model) is a lightweight copy or representation of the actual DOM. It is a programming concept and a data structure used by React to efficiently update and render components.

The Virtual DOM acts as a layer between the React components and the actual browser DOM. When there are changes to the component's state or props, React creates a new virtual DOM tree by comparing the previous and current virtual DOM trees.

**_Q.3 Difference between Virtual Dom vs Real Dom_**

**Ans-** The main difference between the Virtual DOM and the real DOM (Document Object Model).

Virtual DOM: 

1. Structure: The Virtual DOM is a JavaScript representation or abstraction of the actual DOM. It is a lightweight copy of the DOM, created and maintained by React.
2. Updates: React uses the Virtual DOM to efficiently update and render components. When there are changes to the component's state or props, React generates a new virtual DOM tree and compares it with the previous virtual DOM tree to identify the differences or "diffs."
3. Performance: The Virtual DOM allows React to minimize the number of changes required to update the actual DOM. It calculates the optimal way to update the real DOM based on the diffs and only updates the necessary elements, improving performance.

Real DOM:

1. Structure: The Real DOM is the actual HTML document structure created by the browser when it parses an HTML file. It is a tree-like structure that represents the elements and their relationships in the web page.
2. Updates: When there are changes in the web application, such as user interactions or dynamic updates, the Real DOM needs to be updated to reflect these changes. In order to update the Real DOM, the browser re-renders the entire DOM tree, which can be a costly operation especially for large or complex web pages.
3. Performance: Updating the Real DOM can be slow and inefficient, especially when there are frequent updates or changes. Manipulating the Real DOM directly can cause reflows and repaints, resulting in a slow and unresponsive user interface.

**_Q.4 Whats component? Types of component_**

**Ans-** In ReactJS, a component is a reusable and self-combined building block that encapsulates the UI logic and controls a part of the user interface. Components in ReactJS can be classified into two types: Functional Components and Class Components

1. Function Components: Function components are stateless and are defined as JavaScript functions. They are the simplest form of components in ReactJS. 

_Here's an example of functional components:_

```
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

Functional components accepts as a props as an argument and return JSX elements. They are easy to read, test, and maintain.

2. Class Components: Class components  are stateful and are created by extending the React.Component class. They have more features than functional components, such as lifecycle methods and state. 

_Here's an example of a class components:_

```
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default MyComponent;
```

Class components provide more control over the component's behavior and can have their own state. They also have access to lifecyle methods like `componentDidMount` or `componentDidUpdate`.


**_Q.5 Difference between class & function based component_**

**Ans-** The main differences between functional components and class components are as follows: 

1. Syntax: Functional components are defined as JavaScript functions, while class components are defined as JavaScript classes that extend the `React.Component` class.

2. State: Functional components are stateless, meaning they don't have their own state. Class components can have their own state, allowing them to manage and update data internally.

3. Lifecycle methods: Class components have access to lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Functional components don't have built-in lifecycle methods, but React 16.8 introduced hooks which allow functional components to have lifecycle-like functionality.

4. Performance: Functional components are generally considered to have better performance than class components because they are simpler and lightweight. However, the difference in performance can be negligible for most applications.

**_Q.6 Explain react component life cycle_**

**Ans-** The react components lifecycle refers to a set of methods that are automatically called at different stages of a component's life. These methods allow you to implement certain behaviours or perform actions at specific times during the component's lifecycle.

The component lifecycle can be divided into three main phases:

1. Mounting: This phase occurs when a component is being created and inserted into the DOM.

- `constructor()`: The constructor method is called before a component is mounted. It is used to initialize the component's state and bind event handlers.
- `render()`: The render method is responsible for rendering the component's JSX elements.
- `componentDidMount()`: This method is called immediately after the component is mounted. It is often used to fetch data from an API or initialize external libraries.

2. Updating: This phase occurs when a component is being re-rendered due to changes in props or state.

- `shouldComponentUpdate()`: This method is called before re-rendering and can be used to determine if the component should re-render or not. It can be useful for performance optimization.
- `render()`: The render method is called to re-render the updated JSX elements.
- `componentDidUpdate()`: This method is called after the component is re-rendered. It is often used to perform side effects, such as updating the DOM or making additional API requests.

3. Unmounting: This phase occurs when a component is being removed from the DOM. 

- `componentWillUnMount()`: This method is called right before the component is unmounted from the DOM. It can be used to cleanup any resources, such as cancelling timer or removing event listeners.


**_Q.7 Explain Prop Drilling in React & Ways to avoid it_**

**Ans-** Prop drilling in React refers to the process of passing props down through multiple layers of components, even though intermediate components do not actually use those props. This can make the codebase more complex and cluttered, as props need to be passed through each intermediary components, even if they are not directly used those components.

Prop drilling can be inefficient and hard to maintain, especially as the application grows and more components are added. However, there are several ways to avoid prop drilling: 

1. Use React Context: React Context provides a way for components to share data without explicitly passing props through each component in the hierarchy. By creating a context and using the `Provider` and `Consumer` components, you can pass data directly from a top-level component to a deeply nested component without intermediate components needing to receive and pass along the props.
2. Use Hooks: With the introduction of React Hooks, you can use the `useContext` hook to access data from a context without the need for prop drilling. By using the `useContext` hook, you can directly access the context data in a function component.
3. Use Redux: Redux is a state management libraries that provide a centralized store to manage the application state. By using these libraries, you can store the data in the store and access it from any component without the need for prop drilling.
4. Component Composition: Instead of passing props through multiple layers, consider using component composition to create higher-order components or container components that encapsulate the logic and data dependencies.


**_Q.8 Create a Counter Web App using React_**

- Develop a web application using React that functions as a counter.
- Include two buttons in the UI:
    1. "Increment" button:
        - On clicking this button, the counter value should be incremented by one.
    2. "Decrement" button:
        - On clicking this button, the counter value should be decremented by one.
- Implement the counter logic using React's state management.
- Ensure that the counter value is displayed in the UI and updates in real-time when incremented or decremented.
- Use appropriate React components and hooks to manage the counter state and handle button click events.

**Ans-**

**_Q.9  Develop a GitHub User Finder web application using React The application should allow users to enter a GitHub username and display relevant information about the user, including their avatar and name. The design of the application should follow the layout provided in the image below._**

- Use Github Api to get User Data (https://api.github.com/users)
