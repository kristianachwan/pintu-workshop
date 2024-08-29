const addButton = document.querySelector(".todo-button");

const addTodo = () => {
  // Mendapatkan todo input element
  const todoInput = document.querySelector(".todo-input");

  // Mendapatkan parent container dari semua todo-list
  const todoList = document.querySelector(".todo-list");

  // Mendapatkan value dari apa yang diisi oleh user
  const todoInputValue = todoInput.value;

  // Membuat element <li>{todoInputValue}</li>
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInputValue;

  // Memasukan todo yang baru ke dalam container
  todoList.appendChild(newTodo);

  // Mengosongkan input value agar user bisa menambahkan todo kembali tanpa harus menghapus
  todoInput.value = "";
};

addButton.addEventListener("click", addTodo);
