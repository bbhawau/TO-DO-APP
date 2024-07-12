const taskContent = document.getElementById("task");
const listContainer = document.getElementById("taskList");

addButton.addEventListener('click', function () {
  if (taskContent.value == " ") { return; }
  let taskValue = taskContent.value.trim();
  let listTag = document.createElement("li");
  listTag.textContent = taskValue;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.className = "editBtn";
  listTag.appendChild(editBtn);
  listTag.appendChild(deleteBtn);
  listContainer.appendChild(listTag);
  taskContent.value = " ";


})

listContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    let parentNode = e.target.parentNode;
    listContainer.removeChild(parentNode);

  } else if (e.target.classList.contains("editBtn")) {
    e.target.innerHTML = "save";
    let parentNode = e.target.parentNode;
    let editText = document.createElement("input");
    editText.type = "text";

    // editText.value = parentNode.textContent;
    parentNode.replaceChild(editText, parentNode.firstChild);
    editText.focus();
    editText.addEventListener("blur", function () {
      let newTaskValue = editText.value.trim();
      if (newTaskValue === "") {
        listContainer.removeChild(parentNode);
      } else {
        let newTaskText = document.createTextNode(newTaskValue);
        parentNode.replaceChild(newTaskText, editText);
        e.target.innerHTML = "Edit";
      }
    });
  }
})