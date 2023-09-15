import { cardToDom } from "./components/card.js";
import { addData } from "./handler/storageHandler.js";

const { shell } = require("electron");
const author_btn = document.getElementById("author-btn");
const add_btn = document.getElementsByClassName("add-btn")[0];
const clear_btn = document.getElementsByClassName("clear-btn")[0];

author_btn.addEventListener("click", () => {
  shell.openExternal("https://github.com/Katarsis-601");
});

add_btn.addEventListener("click", () => {
  addData();
});

clear_btn.addEventListener("click", () => {
  localStorage.clear();
  cardToDom();
});

cardToDom();
