

const main = document.getElementsByTagName("main")[0]
const home_btn = document.getElementsByClassName("home-btn")[0]
const content_btn = document.getElementsByClassName("list_content-btn")[0]
const profile_btn = document.getElementsByTagName("profile-btn")[0]
let data = { title: "Title", description: "Description", body: "" }

function card(data){
    return `<div class="data_card">
        <h2 class="data_card-title">${data.title}</h2>
        <p class="data_card-paragraph">${data.description}</p>
    </div>`
}

function Home(){
    return `<div class="w-100 text-center flex-column justify-content-center align-items-center text-white">
            <h1>E-Journal</h1>
        </div>`
}
function listOfItems(){
    return `<div class="w-100 text-center flex-column justify-content-center align-items-center text-white">
            <h1>list</h1>
        </div>`
}
home_btn.addEventListener("click",() => {
    main.innerHTML = Home()
})

content_btn.addEventListener("click",() => {
    main.innerHTML = listOfItems()
})