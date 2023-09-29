import { inputBox } from "../components/common.js";
import { cardToDom } from "./domHandler.js";
export class BoxInput {
  constructor(input_model, data = { id: 0, title: "", body: "", date: 0 }) {
    this.status = input_model;
    this.data = data;
    this.input_box = document.getElementById("bg-input");
  }

  box() {
    this.input_box.style.display = "flex";
    this.input_box.innerHTML = inputBox();
    this.close_btn = document.getElementsByClassName("btn-cancel_box")[0];
    this.title_input = document.getElementsByClassName("title-input")[0];
    this.body_input = document.getElementsByClassName("body-input")[0];
    this.form = document.getElementsByTagName("form")[0];
  }

  clearBox() {
    this.input_box.innerHTML = "";
    this.input_box.style.display = "none";
    this.title_input.value = "";
    this.body_input.value = "";
  }

  showBox() {
    this.box();
    this.eventInput();
    this.eventCloseBox();
    this.submit();
  }

  eventInput() {
    if (this.status === "edit") {
      this.title_input.value = this.data.title;
      this.body_input.value = this.data.body;
    }
    this.title_input.addEventListener("input", (e) => {
      this.data.title = e.target.value;
    });
    this.body_input.addEventListener("input", (e) => {
      this.data.body = e.target.value;
    });
  }

  eventCloseBox() {
    return this.close_btn.addEventListener("click", () => {
      this.clearBox();
    });
  }

  addSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      let date = new Date();

      this.data.id = Date.now();
      this.data.date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
      localStorage.setItem(this.data.id, JSON.stringify(this.data));
      this.clearBox();
      cardToDom();
    });
  }

  editSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      localStorage.setItem(this.data.id, JSON.stringify(this.data));
      this.clearBox();
      cardToDom();
    });
  }

  submit() {
    if (this.status === "add") {
      return this.addSubmit();
    } else if (this.status === "edit") {
      return this.editSubmit();
    }
  }
}

export const addBox = new BoxInput("add");
