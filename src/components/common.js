export function card(data) {
  return ` <div class="uk-card uk-card-body uk-border-rounded uk-width-1-1" id="card" data-id=${data.id}>
                    <h2 class="uk-card-title card-title">${data.title}</h2>
                    <div class="uk-flex uk-flex-column uk-flex-between card-info">
                        <p class="uk-text-small uk-text-muted uk-margin-remove">${data.date}</p>
                        <div class="card-navigation">
                            <button class="uk-button-secondary show-btn" data-id=${data.id}>Show Journal</button>
                            <button class="uk-button-primary edit-btn" data-id=${data.id}>Edit</button>
                            <button class="uk-button-danger delete-btn" data-id=${data.id}>Delete</button>
                        </div>
                    </div>
                </div>
`;
}

export function body_card(data) {
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

export function inputBox() {
  return `<div class="uk-background-secondary uk-padding-small uk-border-rounded uk-width-1-2 input-test">
            <form class="uk-flex uk-flex-column uk-flex-around uk-width-1-1">
                <label for="title-input">Title : </label>
                <input type="text" name="title-input" class="title-input" required>

                <label for="content-input">Content : </label>
                <textarea name="content-input" id="" cols="30" rows="10" class="body-input" required></textarea>
                <div>
                    <button type="reset" class="btn-cancel_box">Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>`;
}
