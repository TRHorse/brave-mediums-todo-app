// acessing form and input
const todoForm = document["todo-form"];
const todoInput = todoForm["todo-input"];

// accessign other elements
const listWrapper = document.querySelector(".list-wrapper");

// form events
todoForm.addEventListener("submit", addNewTodo);

// adding new todo
function addNewTodo(e) {
  e.preventDefault();
  let todoValue = todoInput.value.trim();

  if (!todoValue) return;

  try {
    // for first time addig todo
    if (getData() === null) {
      storeData([todoValue]);

      listWrapper.innerHTML = "";

      insertTodoInDOM(todoValue);

      todoForm.reset();
      return;
    }

    // adding new todos
    const items = getData();

    items.push(todoValue);

    storeData(items);

    insertTodoInDOM(todoValue);

    todoForm.reset();
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
}

// insert new todo in DOM
function insertTodoInDOM(value) {
  let li = `<li><span class="todo-name">${value}</span></li>`;
  listWrapper.innerHTML += li;
}

// add todo list in localStorage
function storeData(data) {
  return localStorage.setItem("todo-list", JSON.stringify(data));
}

// get todo list from localStorage
function getData() {
  if (localStorage.getItem("todo-list") == "") {
    return null;
  }

  return JSON.parse(localStorage.getItem("todo-list"));
}

// show todos when DOM load for the first time
document.addEventListener("DOMContentLoaded", showTodos);

function showTodos() {
  if (getData() !== null) {
    const data = getData();

    // remove if any elements present already
    listWrapper.innerHTML = "";

    data.forEach((item) => {
      insertTodoInDOM(item);
    });

    return;
  }

  listWrapper.innerHTML = "";

  insertTodoInDOM("Record Not Found!");
}