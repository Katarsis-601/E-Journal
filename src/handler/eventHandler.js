import { body_card } from "../components/common.js";
import { BoxInput } from "./boxHandler.js";
import { cardToDom } from "./domHandler.js";

const container_warp = document.getElementsByClassName("container-warp")[0];

export function eventDelete() {
  return document.querySelectorAll(".delete-btn").forEach((data) => {
    return data.addEventListener("click", () => {
      localStorage.removeItem(data.getAttribute("data-id"));
      cardToDom();
    });
  });
}

export function eventEdit() {
  return document.querySelectorAll(".edit-btn").forEach((value) => {
    let data = JSON.parse(localStorage.getItem(value.getAttribute("data-id")));
    value.addEventListener("click", () => {
      new BoxInput("edit", data).showBox();
    });
  });
}

export function eventShowBox() {
  return document.querySelectorAll(".show-btn").forEach((data) => {
    data.addEventListener("click", () => {
      let storage_data = JSON.parse(
        localStorage.getItem(data.getAttribute("data-id"))
      );
      container_warp.classList.add("uk-height-1-1");
      container_warp.innerHTML = body_card(storage_data);
      document.getElementsByClassName("container-content")[0].style.display =
        "flex";
      closeBody();
    });
  });
}

function closeBody() {
  return document
    .getElementsByClassName("body_close-btn")[0]
    .addEventListener("click", () => {
      container_warp.classList.remove("uk-height-1-1");
      document.getElementsByClassName("container-content")[0].style.display =
        "none";
    });
}
