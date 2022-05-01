// importing utilities
import {
  getData,
  insertTodoInDOM,
  storeData,
  listWrapper,
} from "./config/vandor.js";

const todoForm = document["todo-form"];
const todoInput = todoForm["todo-input"];

// adding new todo
export function addNewTodo(e) {
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
