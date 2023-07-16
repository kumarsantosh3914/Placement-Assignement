## React Assignment 9

**_Q.1 What are hooks in react? how to identify hooks?_**

**Ans-** In React, hooks are functions that allow functional components to have stateful behabior and access to React features such as lifecycle methods. They were introduced in React 16.8 as a way to write reusable stateful logic without using class components.

Hooks can be identified by their naming convention. They always start with prefix "use", followed by a camelCase name. For example commonly used hooks are useState, useEffect, useContext, and useRef.

**_Q.2 Explain useState Hook & what can you achieve with it?_**

**Ans-** In React, `useState` hook is a built-in hook that allows functional components to have state. It provides a way to store and update state in functional components, without the need for using class components.

The `useState` hook takes an initial value as its argument and returns an array with two elements. The first element is the current state value, and the second element is a function that can be used to update the state value.

**_Q.3 How to pass data from one component to another component_**

**Ans-** There are several ways to pass data from one component to another in React. Here are a few common methods:

1. Props: One way to pass data from a parent component to a child component is by using props. In the parent component, you can pass data as props when rendering the child component. In the child component, you can access the passed data through the props object. 

_Here's an example:_

Parent Component: 

```
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = 'Hi there from parent';
  
  return (
    <ChildComponent data={data} />
  );
}

export default ParentComponent;
```

Child Component: 

```
import React from 'react';

function ChildComponent(props) {
  const { data } = props;
  
  return (
    <div>{data}</div>
  );
}

export default ChildComponent;
```

2. Context: Context providers a way to pass data through the component tree without having to pass props manually at every level. With context, you can create a context object in a parent component and specify the data you want to share. Then, you can corresponding context provider. 

3. State Management Libraries: React also provides thrid-party state management libraries like Redux and MobX, which allow you to centralize and manage the application state in a global store. With these libraries, you can dispatch actions to update the state, and components can subscribe to the data they need.

**_Q.4 What is the significance of the "key" prop in React lists, and why is it important to use it correctly?_**

**Ans-** In React, the "Key" prop is used to uniquely identify element in a list or collection. When rendering a list of elements, React needs a way to efficiently update and manage them. The "Key" prop helps React to keep track of individual items in the list, detect changes, and apply the appropriate updates.

Using the key prop correctly is important for several reasons: 

1. Efficient updates
2. Reconciliation
3. Avoiding errors

**_Q.5 What is the significance of using "setState" instead of modifying state directly in React?_**

**Ans-** In React, the `setState` method is used to update the component's state. It is significant to use `setState` instead of modifying the state directly because doing so ensures that React can properly track and manage the state changes, and trigger the necessay updates to the component.


**_Q.6 Explain the concept of React fragments and when you should use them._**

**Ans-** In React, a fragment is a built-in feature that allows you to group multiple elements together without adding an additional DOM element. It's useful when you need to return multiple adjacent elements from a component's JSX render method, as a component can only return a single root element.

_Here's an example of using React fragments:_

```
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>React Fragments</p>
    </>
  );
}
```

**_Q.7 How do you handle conditional rendering in React?_** 

**Ans-** In React, conditional rendering is the process of rendering different elements or components based on certain conditions. There are multiple ways to handle conditional rendering in React.

1. Using the `if` statement: You can use the `if` statement along with JavaScript inside the `render` method of a React component to conditionally render elements or components. 

_Here's an example:_

```
render() {
  if (condition) {
    return <h1>Hello</h1>;
  } else {
    return <p>World</p>;
  }
}
```

2. Using the ternary operator: The ternary operator allows you to write more conscise conditional rendering logic.

_Here's an example:_

```
render() {
  return (
    <div>
      {condition ? <h1>Hello</h1> : <p>World</p>}
    </div>
  );
}
```

3. Using the logical `&&` operator: If you only want to render a single element or component based on a condition, you can use the logical `&&` operator. The element or component will be rendered if the condition is truthy, otherwise it won't be rendered.

_Here's an example:_

```
render() {
  return (
    <div>
      {condition && <h1>Hello</h1>}
    </div>
  );
}
```

**_Q.8  Create a Simple Todo Web App with following features Using React :_**

- An input button where users can type their tasks.
- On clicking the submit button, the entered task should be displayed in the UI.
- The UI layout should resemble the image provided.

**Ans-**

**_Q. 9 Expand the existing todo web app with two additional functionalities:_**

1. On clicking the "Update Status" button:
    - Update the status of the task.
2. On clicking the "Remove Todo" button:
    - Remove the selected todo from the UI.
    - Ensure that the deleted todo is no longer visible in the todo list.

**Ans-**


**_Q. 10 Build Calculator Web app using React, See below image for reference_**

**Ans-**