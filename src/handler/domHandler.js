import { card } from "../components/common.js";
import { eventDelete, eventEdit, eventShowBox } from "./eventHandler.js";
const content = document.getElementsByClassName("content")[0];

function getData() {
  let item = [];

  for (let i = 0; i < localStorage.length; i++) {
    item.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return item;
}

function listOfItem(item) {
  return item.map((data) => {
    return card(data);
  });
}

export function cardToDom() {
  content.innerHTML =
    localStorage.length == 0
      ? `<p>Empty Journal</p>`
      : listOfItem(getData()).join(" ");
  eventDelete();
  eventEdit();
  eventShowBox();
}
