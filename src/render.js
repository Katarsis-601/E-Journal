const { ipcRenderer } = require("electron");


const btn = document.getElementsByClassName("test-btn")[0]
const textarea = document.getElementsByClassName("text")[0]
btn.addEventListener("click", () => {
    textarea.innerHTML = "test"
})
