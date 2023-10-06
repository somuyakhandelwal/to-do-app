// Initialize an empty array to store activities
var listOfActivities = [];

// Get references to HTML elements
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");

// Add a click event listener to a button
document.getElementById("button").onclick = handleButtonClick;

// Event handler for button click
function handleButtonClick() {
  // Get the input value and add it to the list of activities
  var newActivity = input.value.trim();
  if (newActivity !== "") {
    listOfActivities.push(newActivity);
    input.value = "";
    showList();
  }
}

// Display the list of activities
function showList() {
  // Clear the previous list
  todolist.innerHTML = "";

  // Loop through the list of activities and create list items
  listOfActivities.forEach(function (activity, index) {
    var listItem = document.createElement("li");

    // Create a text node for the activity
    var textNode = document.createTextNode(activity);

    // Create an edit button
    var editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      editItem(index);
    };

    // Create a delete button
    var deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteItem(index);
    };

    // Append elements to the list item
    listItem.appendChild(textNode);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the to-do list
    todolist.appendChild(listItem);
  });
}

// Delete an item from the list
function deleteItem(index) {
  listOfActivities.splice(index, 1);
  showList();
}

// Edit an item in the list
function editItem(index) {
  var newValue = prompt("Please enter a new value");
  if (newValue !== null) {
    listOfActivities[index] = newValue;
    showList();
  }
}

// Initial display of the empty list
showList();
