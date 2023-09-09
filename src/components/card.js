export function card(data) {
  return ` <div class="uk-card uk-card-body uk-border-rounded" id="card">
                    <h2 class="uk-card-title">${data.title}</h2>
                    <p class="card-description uk-border-rounded">${data.description}</p>
                    <div class="uk-flex uk-flex-row uk-flex-between card-info">
                        <p class="uk-text-small uk-text-muted uk-margin-remove">${data.id}</p>
                        <div>
                            <button class="uk-button-primary">Edit</button>
                            <button class="uk-button-danger">Delete</button>
                        </div>
                    </div>
                </div>
`;
}
