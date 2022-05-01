// importing utilities
import {
  showTodos,
  addNewTodo,
  listWrapper,
  getData,
  storeData,
  insertTodoInDOM,
  noRecord,
} from "./config/vandor.js";

// acessing form and input
const todoForm = document["todo-form"];

// adding new todo
todoForm.addEventListener("submit", addNewTodo);

// show todos when DOM load for the first time
document.addEventListener("DOMContentLoaded", showTodos);

// delete todo feature
const deleteBtn = document.querySelector(".delete-btn");

function insertActionBtns() {
  const deleteItem = listWrapper.querySelector(".delete-item");

  if (getData() === null) return;

  if (deleteItem !== null) return;

  const li = listWrapper.querySelectorAll("li");
  li.forEach((el, i) => {
    const deleteItems = `
    <button class="delete-item" data-id="${i}">
      <i class="fa-solid fa-trash"></i>
    </button>`;

    el.insertAdjacentHTML("beforeend", deleteItems);
  });
}

deleteBtn.addEventListener("click", () => {
  insertActionBtns();

  deleteBtnAdded();
});

function deleteBtnAdded() {
  const btns = listWrapper.querySelectorAll(".delete-item");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let id = btn.dataset.id;

      let items = getData();

      if (items.length == 1) {
        localStorage.removeItem("todo-list");
        noRecord();
        return;
      }

      items.splice(id, 1);

      storeData(items);

      showTodos();
      insertActionBtns();
      deleteBtnAdded();
    });
  });
}
