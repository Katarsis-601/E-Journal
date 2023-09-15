import { eventDelete, getData, eventEdit } from "../handler/storageHandler.js";

const cancel_btn = document.getElementsByClassName("btn-cancel_box")[0];
const title_input = document.getElementsByClassName("title-input")[0];
const body_input = document.getElementsByClassName("body-input")[0];
const input_box = document.getElementById("bg-input");
const content = document.getElementsByClassName("content")[0];
const container_warp = document.getElementsByClassName("container-warp")[0];
export function card(data) {
  return ` <div class="uk-card uk-card-body uk-border-rounded" id="card" data-id=${
    data.id
  }>
                    <h2 class="uk-card-title card-title">${data.title}</h2>
                    <p class="card-description uk-border-rounded">${
                      data.body.length == 0 ? "Empty" : data.body
                    }</p>
                    <div class="uk-flex uk-flex-row uk-flex-between card-info">
                        <p class="uk-text-small uk-text-muted uk-margin-remove">${
                          data.id
                        }</p>
                        <div>

                            <button class="uk-button-secondary show-btn" data-id=${
                              data.id
                            }>Show Journal</button>
                            <button class="uk-button-primary edit-btn" data-id=${
                              data.id
                            }>Edit</button>
                            <button class="uk-button-danger delete-btn" data-id=${
                              data.id
                            }>Delete</button>
                        </div>
                    </div>
                </div>
`;
}

function body_card(data) {
  return `<div class="uk-width-1-1 uk-height-1-1 uk-position-absolute uk-flex-center container-content">
        <div class="content-card uk-background-secondary uk-padding-small uk-flex uk-flex-column">
            <button class="uk-button-small uk-button-danger body_close-btn">X</button>
            <div class="content-body uk-width-1-1">
                <h1 class="uk-text-bolder text-white">${data.title}</h1>
                <p class="text-white">${data.body}</p>
            </div>
        </div>
    </div>
`;
}

function listOfItem(item) {
  return item.map((data) => {
    return card(data);
  });
}

export function cardToDom() {
  content.innerHTML = listOfItem(getData()).join(" ");
  eventDelete();
  eventEdit();
  showBodyBtn();
}

function showBodyBtn() {
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

export function showInputBox(
  data,
  title_default_value = "",
  body_default_value = ""
) {
  cancel_btn.addEventListener("click", (event) => {
    input_box.style.display = "none";
  });

  title_input.value = title_default_value;
  body_input.value = body_default_value;

  title_input.addEventListener("input", (event) => {
    data.title = event.target.value;
  });

  body_input.addEventListener("input", (event) => {
    data.body = event.target.value;
  });

  return (input_box.style.display = "flex");
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
