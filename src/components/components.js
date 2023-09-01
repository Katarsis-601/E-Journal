export function card(data){
    return `<div class="data_card">
        <h2 class="data_card-title">${data.title}</h2>
        <p class="data_card-paragraph">${data.description}</p>
    </div>`
}

export function Home(){
    return `<div class="w-100 text-center flex-column justify-content-center align-items-center text-white">
            <h1>E-Journal</h1>
        </div>`
}
export function listOfItems(){
    return `<div class="w-100 text-center flex-column justify-content-center align-items-center text-white">
            <h1>list</h1>
        </div>`
}