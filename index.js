function submitInput() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const input = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val("");
        $('.shopping-list').append(`<li><span class='shopping-item'>${input}</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button> <button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`);
    });
}

$(() => {
    $(submitInput);
});