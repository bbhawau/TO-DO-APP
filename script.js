const taskContent = document.getElementById("task");
const listContainer = document.getElementById("taskList");

addButton.addEventListener('click', function () {
    //if ( taskContent.value == " "){return;}
    let taskValue = taskContent.value.trim();
    let listTag = document.createElement("li");
    listTag.textContent = taskValue;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    listTag.appendChild(deleteBtn);
    listContainer.appendChild(listTag);
    taskContent.value = " ";

})

listContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        let parentNode = e.target.parentNode;
        listContainer.removeChild(parentNode);
    }
})