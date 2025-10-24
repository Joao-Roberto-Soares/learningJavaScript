const todoList = ['make dinner', 'wash dishes']; // initial list of to-dos

function renderTodoList() { // function to display all to-dos
  let todoListHTML = ''; // prepare empty string for HTML

  for (let i = 0; i < todoList.length; i++) { // loop through each to-do
    const todo = todoList[i]; // get current to-do
    const html = `<p>${todo}</p>`; // create paragraph for to-do
    todoListHTML += html; // add paragraph to overall HTML
  }

  document.querySelector('.js-todo-list') // find the list container
    .innerHTML = todoListHTML; // insert all to-dos into the page
}

function addTodo() { // function to add new to-do
  const inputElement = document.querySelector('.js-name-input'); // get input field
  const name = inputElement.value; // get text from input
  todoList.push(name); // add new to-do to array
  inputElement.value = ''; // clear input after adding
}
