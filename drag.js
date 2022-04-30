import showLists from "./showLists.js";

function drag() {
  const ul = document.querySelector("ul");

  let draggedEl;

  ul.addEventListener("drag", () => {}, false);

  ul.addEventListener(
    "dragstart",
    (e) => {
      draggedEl = e.target;
      //   console.log("dragstart");
    },
    false
  );

  ul.addEventListener(
    "dragend",
    (e) => {
      //   console.log("dragend");
    },
    false
  );

  ul.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
      //   console.log("dragover");
    },
    false
  );

  ul.addEventListener(
    "dragenter",
    (e) => {
      let span = e.target.classList.contains("text");
      if (!span) return;

      e.target.parentElement.style.backgroundColor = "rgb(104 104 104)";
    },
    false
  );

  ul.addEventListener(
    "dragleave",
    (e) => {
      //   console.log("dragleave");
      e.target.parentElement.style.background = "";
    },
    false
  );

  ul.addEventListener(
    "drop",
    (e) => {
      let span = e.target.classList.contains("text");
      if (!span) return;

      let li = e.target.parentElement;

      if (e.offsetY < 20) {
        li.insertAdjacentElement("beforebegin", draggedEl);
        li.style.background = "";
        updateOrder();
      } else {
        li.insertAdjacentElement("afterend", draggedEl);
        li.style.background = "";
        updateOrder();
      }
    },
    false
  );
}

function updateOrder() {
  const spans = document.querySelectorAll("span.text");

  let lists = [];

  for (let i = 0; i < spans.length; i++) {
    lists.push(spans[i].innerText);
  }

  localStorage.setItem("todos", JSON.stringify(lists));

  showLists();
}

export default drag;
