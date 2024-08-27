const addButton = document.querySelector(".todo-button");

const addTodo = () => {
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoInputValue = todoInput.value;
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInputValue;

  todoList.appendChild(newTodo);

  todoInput.value = "";
};

addButton.addEventListener("click", addTodo);
