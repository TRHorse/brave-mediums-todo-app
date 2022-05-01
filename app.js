// importing utilities
import {
  showTodos,
  addNewTodo,
  listWrapper,
  getData,
  storeData,
  insertTodoInDOM,
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

  btns.forEach((btn , i) => {
    btn.addEventListener("click", (e) => {
      let id = btn.dataset.id;

      let items = getData();

      // console.log("before", items);

      items.splice(id, 1);

      storeData(items);

      // showTodos();
      // insertActionBtns();



      // console.log("after", items);

      console.log(id);
      console.log(i);
    });
  });
}
