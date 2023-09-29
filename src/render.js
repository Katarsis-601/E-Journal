import { cardToDom } from "./handler/domHandler.js";
import { addBox } from "./handler/boxHandler.js";
const { shell } = require("electron");
const author_btn = document.getElementById("author-btn");
const clear_btn = document.getElementsByClassName("clear-btn")[0];
const add_btn = document.getElementsByClassName("add-btn")[0];

author_btn.addEventListener("click", () => {
  shell.openExternal("https://github.com/Katarsis-601");
});

add_btn.addEventListener("click", () => {
  addBox.showBox();
});

clear_btn.addEventListener("click", () => {
  localStorage.clear();
  cardToDom();
});

cardToDom();
