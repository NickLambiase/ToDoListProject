//DOM manipulation objects
let toDoList = document.getElementById("unordered-list");
let textInput = document.getElementById("to-do-item-input");

//uninitialized variables
let itemLabel = '';

/**
 * desc
 * adds a list item to the unordered list "toDoList" if the user input in the text box is not an empty string
 * @date 2023-04-11
 */
function addListItem() {
    itemLabel = textInput.value;
    
    if (itemLabel === '') {
        alert("invalid item name... try again");
    } else {
        let toDoListItem = document.createElement("li");
        toDoListItem.innerText = itemLabel;
        toDoList.appendChild(toDoListItem);
    }
    
}