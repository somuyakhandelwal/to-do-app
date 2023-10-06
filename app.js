var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = handleButtonClick;

function handleButtonClick() {
  var newActivity = input.value.trim();
  if (newActivity !== "") {
    listOfActivities.push(newActivity);
    input.value = "";
    showList();
  }
}

function showList() {
  todolist.innerHTML = "";

  listOfActivities.forEach(function (activity, index) {
    var listItem = document.createElement("li");

    var textNode = document.createTextNode(activity);

    var editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      editItem(index);
    };

    var deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteItem(index);
    };

    listItem.appendChild(textNode);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todolist.appendChild(listItem);
  });
}

function deleteItem(index) {
  listOfActivities.splice(index, 1);
  showList();
}

function editItem(index) {
  var newValue = prompt("Please enter a new value");
  if (newValue !== null) {
    listOfActivities[index] = newValue;
    showList();
  }
}

showList();
