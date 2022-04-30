// accssing list elements
import accessAction from "./accessAction.js"

const todosUl = document.querySelector(".todos");

function showLists() {
  if (!localStorage.getItem("todos")) return;

  const getItems = localStorage.getItem("todos");

  const parseItems = JSON.parse(getItems);

  todosUl.innerHTML = "";

  for (let i = 0; i < parseItems.length; i++) {
    todosUl.innerHTML += `
      <li draggable="true">
        <span class="text">${parseItems[i]}</span>
        <button class="action editBtn" data-editId="${i}">Edit</button>
        <button class="action deleteBtn" data-id="${i}">Delete</button>
      </li>
      `;
  }

  accessAction();
}

export default showLists;
