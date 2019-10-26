function main() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const input = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val("");
    });
}

$(main);