const STORE = [
    {name: "apples", checked: false}, 
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false},
];

function renderList() {
    $('.shopping-list').find('li').remove();
    for(let i = 0; i < STORE.length; i++) {
        $('.shopping-list').append(`<li>
        <span class="shopping-item ${STORE[i].checked ? "shopping-item__checked" : ""}">${STORE[i].name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    }
}

function submitInput() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        STORE.push({name: $('#shopping-list-entry').val(), checked: false});
        $('#shopping-list-entry').val("");
        renderList();
    });
}

// need to figure out how to remove and check entries using STORE array
function deleteEntry() {
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        this.closest('li').remove();
        // console.log(event);
    });
}

function checkEntry() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function main() {
    renderList();
    submitInput();
    deleteEntry();
    checkEntry();
}

$(main);
