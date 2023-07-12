// // Get form element
// const todoForm = document.getElementById("todo-form");
// // Get input element
// const todoInput = document.getElementById("todo-input");
// // Get todo list element
// const todoList = document.getElementById("todo-list");

// // Add event listener to the form submit event
// todoForm.addEventListener("submit", addTodo);

// // Function to add a new todo
// function addTodo(event) {
//   event.preventDefault(); // Prevent form submission

//   const todoText = todoInput.value.trim(); // Get the entered todo text

//   if (todoText !== "") {
//     const todoItem = createTodoItem(todoText); // Create a new todo item
//     todoList.appendChild(todoItem); // Add the todo item to the list
//     todoInput.value = ""; // Clear the input field
//   }
// }

// // Function to create a new todo item
// function createTodoItem(todoText) {
//   // Create the list item
//   const listItem = document.createElement("li");
//   listItem.classList.add("todo-item");

//   // Create the todo name element
//   const todoName = document.createElement("span");
//   todoName.textContent = todoText;
//   todoName.classList.add("todo-name");
//   listItem.appendChild(todoName);

//   // Create the todo status element
//   const todoStatus = document.createElement("span");
//   todoStatus.textContent = "Status : Pending";
//   todoStatus.classList.add("todo-status");
//   listItem.appendChild(todoStatus);

//   // Create the remove button
//   const removeButton = document.createElement("button");
//   removeButton.textContent = "Remove";
//   removeButton.classList.add("remove-btn");
//   removeButton.addEventListener("click", removeTodo);
//   listItem.appendChild(removeButton);

//   // Create the mark completed button
//   const markCompletedButton = document.createElement("button");
//   markCompletedButton.textContent = "Mark Completed";
//   markCompletedButton.classList.add("mark-completed-btn");
//   markCompletedButton.addEventListener("click", markCompleted);
//   listItem.appendChild(markCompletedButton);

//   // Create the edit button
//   const editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.classList.add("edit-btn");
//   editButton.addEventListener("click", editTodo);
//   listItem.appendChild(editButton);

//   return listItem;
// }

// // Function to remove a todo
// function removeTodo() {
//   const listItem = this.parentNode; // Get the parent list item
//   const todoList = listItem.parentNode; // Get the parent todo list
//   todoList.removeChild(listItem); // Remove the list item from the todo list
// }

// // Function to mark a todo as completed
// function markCompleted() {
//   const listItem = this.parentNode; // Get the parent list item
//   const todoStatus = listItem.querySelector(".todo-status"); // Get the todo status element
//   todoStatus.textContent = "Completed"; // Update the todo status
//   this.disabled = true; // Disable the mark completed button
// }

// // Function to edit a todo
// function editTodo() {
//   const listItem = this.parentNode; // Get the parent list item
//   const todoName = listItem.querySelector(".todo-name"); // Get the todo name element
//   const editedText = prompt("Edit the todo:", todoName.textContent); // Prompt for edited text

//   if (editedText !== null && editedText.trim() !== "") {
//     todoName.textContent = editedText; // Update the todo name with the edited text
//   }
// }

// Get form element
const todoForm = document.getElementById("todo-form");
// Get input element
const todoInput = document.getElementById("todo-input");
// Get todo list element
const todoList = document.getElementById("todo-list");

// Add event listener to the form submit event
todoForm.addEventListener("submit", addTodo);

// Function to add a new todo
function addTodo(event) {
  event.preventDefault(); // Prevent form submission

  const todoText = todoInput.value.trim(); // Get the entered todo text

  if (todoText !== "") {
    const todoItem = createTodoItem(todoText); // Create a new todo item
    todoList.appendChild(todoItem); // Add the todo item to the list
    todoInput.value = ""; // Clear the input field
  }
}

// Function to create a new todo item
function createTodoItem(todoText) {
  // Create the list item
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");

  // Create the todo name element
  const todoName = document.createElement("span");
  todoName.textContent = todoText;
  todoName.classList.add("todo-name");
  listItem.appendChild(todoName);

  // Create the todo status element
  const todoStatus = document.createElement("span");
  todoStatus.textContent = "Status: Pending";
  todoStatus.classList.add("todo-status");
  listItem.appendChild(todoStatus);

  // Create the remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-btn");
  removeButton.addEventListener("click", removeTodo);
  listItem.appendChild(removeButton);

  // Create the mark completed button
  const markCompletedButton = document.createElement("button");
  markCompletedButton.textContent = "Mark Completed";
  markCompletedButton.classList.add("mark-completed-btn");
  markCompletedButton.addEventListener("click", updateStatus);
  listItem.appendChild(markCompletedButton);

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-btn");
  editButton.addEventListener("click", editTodo);
  listItem.appendChild(editButton);

  return listItem;
}

// Function to remove a todo
function removeTodo() {
  const listItem = this.parentNode; // Get the parent list item
  const todoList = listItem.parentNode; // Get the parent todo list
  todoList.removeChild(listItem); // Remove the list item from the todo list
}

// Function to update the status of a todo
function updateStatus() {
  const listItem = this.parentNode; // Get the parent list item
  const todoStatus = listItem.querySelector(".todo-status"); // Get the todo status element
  const isCompleted = todoStatus.textContent.includes("Completed");

  if (isCompleted) {
    todoStatus.textContent = "Status: Pending";
    listItem.style.backgroundColor = "";
  } else {
    todoStatus.textContent = "Status: Completed";
    listItem.style.backgroundColor = "#b3ffb3";
  }
}

// Function to edit a todo
function editTodo() {
  const listItem = this.parentNode; // Get the parent list item
  const todoName = listItem.querySelector(".todo-name"); // Get the todo name element
  const editedText = prompt("Edit the todo:", todoName.textContent); // Prompt for edited text

  if (editedText !== null && editedText.trim() !== "") {
    todoName.textContent = editedText; // Update the todo name with the edited text
  }
}
