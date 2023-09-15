import { cardToDom, showInputBox } from "../components/card.js";

const input_box = document.getElementById("bg-input");
const form = document.getElementsByTagName("form")[0];

function formSubmit(data, submit = true) {
  if (submit) {
    data.id = Date.now();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    localStorage.setItem(data.id, JSON.stringify(data));
    input_box.style.display = "none";
    cardToDom();
  });
}

export function getData() {
  let item = [];

  for (let i = 0; i < localStorage.length; i++) {
    item.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return item;
}

export function eventDelete() {
  return document.querySelectorAll(".delete-btn").forEach((data) => {
    return data.addEventListener("click", () => {
      localStorage.removeItem(data.getAttribute("data-id"));
      cardToDom();
    });
  });
}

export function addData() {
  let data = { title: "", body: "" };
  showInputBox(data);
  formSubmit(data);
}

export function eventEdit() {
  return document.querySelectorAll(".edit-btn").forEach((value) => {
    value.addEventListener("click", () => {
      let data = { title: "", body: "" };
      let storage_data = JSON.parse(
        localStorage.getItem(value.getAttribute("data-id"))
      );
      showInputBox(data, storage_data.title, storage_data.body);
      formSubmit(data, false);
    });
  });
}
