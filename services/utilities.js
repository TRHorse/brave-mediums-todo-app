export const listWrapper = document.querySelector(".list-wrapper");

// insert new todo in DOM
export function insertTodoInDOM(value) {
  let li = `<li><span class="todo-name">${value}</span></li>`;
  listWrapper.innerHTML += li;
}

// add todo list in localStorage
export function storeData(data) {
  return localStorage.setItem("todo-list", JSON.stringify(data));
}

// get todo list from localStorage
export function getData() {
  if (localStorage.getItem("todo-list") == "") {
    return null;
  }

  return JSON.parse(localStorage.getItem("todo-list"));
}

export function showTodos() {
  if (getData() !== null) {
    const data = getData();

    // remove if any elements present already
    listWrapper.innerHTML = "";

    data.forEach((item) => {
      insertTodoInDOM(item);
    });

    return;
  }

  noRecord();
}

export function noRecord() {
  listWrapper.innerHTML = "";

  insertTodoInDOM("Record Not Found!");
}
