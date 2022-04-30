// show items in web page
import showLists from "./showLists.js";
// drag
import drag from "./drag.js";

const todoText = document.getElementById("todoText");
const newTodo = document.newTodo;

// add new item
newTodo.addEventListener("submit", addToStorage);
// display all items in the browser if item is found
document.addEventListener("DOMContentLoaded", showLists);

// adding new item
function addToStorage(e) {
  e.preventDefault();

  if (todoText.value.trim() == "") return;

  // adding item for first time
  if (!localStorage.getItem("todos")) {
    let lists = [];

    lists.push(todoText.value.trim());

    const stringifyLists = JSON.stringify(lists);

    localStorage.setItem("todos", stringifyLists);

    showLists();

    todoText.value = "";
    return;
  }

  // adding new list item
  const getLists = localStorage.getItem("todos");

  const parseLists = JSON.parse(getLists);

  parseLists.push(todoText.value.trim());

  localStorage.setItem("todos", JSON.stringify(parseLists));

  showLists();

  todoText.value = "";
}

// drag
drag();
