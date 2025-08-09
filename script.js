const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    input.value = "";
  }
});

function addTask(text) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskContent = document.createElement("span");
  taskContent.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    taskDiv.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => {
    taskList.removeChild(taskDiv);
  };

  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(completeBtn);
  taskDiv.appendChild(deleteBtn);
  taskList.appendChild(taskDiv);
}
