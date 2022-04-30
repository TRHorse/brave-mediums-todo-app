import showLists from "./showLists.js";

const todosUl = document.querySelector("ul");

function accessAction() {
  // ! delete item
  const deleteBtn = document.querySelectorAll(".deleteBtn");

  deleteBtn.forEach((del) => {
    del.addEventListener("click", (e) => {
      // remove from dom
      e.target.parentElement.outerHTML = "";

      // remvoe from localstorage
      let id = e.target.dataset.id;

      const getItems = localStorage.getItem("todos");

      const parseItems = JSON.parse(getItems);

      parseItems.splice(id, 1);

      if (parseItems.length == 0) {
        localStorage.removeItem("todos");
        todosUl.innerHTML = `<li class="msg">Record Not Found!</li>`;
        showLists();
        return;
      }

      localStorage.setItem("todos", JSON.stringify(parseItems));

      showLists();
    });
  });

  // * edit existing list
  const editBtn = document.querySelectorAll(".editBtn");

  editBtn.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      let parent = e.target.parentElement;

      let text = parent.querySelector("span.text");

      text.parentElement.setAttribute("draggable", "false");

      let value = text.innerText;

      text.outerHTML = `<input type="text" value="${value}" class="updateInput"/>`;

      const updateInput = document.querySelectorAll(".updateInput");

      let id = e.target.dataset.editid;

      updateInput.forEach((input) => {
        input.addEventListener("blur", (e) => {
          input.outerHTML = `<span class="text">${input.value}</span>`;

          let parseItems = JSON.parse(localStorage.getItem("todos"));

          if (input.value.trim() == "") {
            showLists();
            return;
          }

          parseItems[id] = input.value;

          localStorage.setItem("todos", JSON.stringify(parseItems));

          let span = parent.querySelector("span.text");
          span.parentElement.setAttribute("draggable", "true");
        });
      });
    });
  });
}

export default accessAction;
