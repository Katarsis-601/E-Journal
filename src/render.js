import { card } from "./components/card.js";

const { shell } = require("electron");
const author_btn = document.getElementById("author-btn");
const add_btn = document.getElementsByClassName("add-btn")[0];
const clear_btn = document.getElementsByClassName("clear-btn")[0];
const content = document.getElementsByClassName("content")[0];

let data = { title: "New Journal", description: "Description", body: "" };

author_btn.addEventListener("click", () => {
  shell.openExternal("https://github.com/Katarsis-601");
});

add_btn.addEventListener("click", () => {
  data.id = Date.now();
  localStorage.setItem(data.id, JSON.stringify(data));
  content.innerHTML = getData();
});
clear_btn.addEventListener("click", () => {
  localStorage.clear();
  content.innerHTML = getData();
});

function getData() {
  let item = [];

  let listOfCard = item.map((data) => {
    return card(data);
  });

  for (let i = 0; i < localStorage.length; i++) {
    item.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return listOfCard;
}

content.innerHTML = getData();
