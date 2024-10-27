const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Funkcia na pridanie úlohy
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Ukonči, ak je pole prázdne

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Tlačidlo na odstránenie úlohy
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => taskList.removeChild(taskItem);

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Vyčisti vstupné pole
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});
