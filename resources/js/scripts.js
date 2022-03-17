let list = $('#list');


//1. Adding a new item to the list of items:
function newItem() {
    let inputValue = $('#input').val();
    let li = $(`<li>${inputValue}</li>`);

    let crossOutButton = $('<button id="crossOutButton">&times;</button>');
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete')
    }

    function crossOut() {
        li.toggleClass('strike')
    }

    li.on('dblclick', crossOut);


    if (inputValue === '') {
        alert('You must write something!');
    } else {
        list.append(li);
    }

// 4. Reordering the items:
    list.sortable();
}


let form = $('#form');
form.on('submit', (event) => {
    event.preventDefault()
})

