document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    addToDo();
  });
  form.reset();
});

function addToDo() {
  const input = document.getElementById("new-task-description");
  const todo = input.value;
  if (todo) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDelete);
    btn.textContent = "x";
    li.textContent = todo;
    li.appendChild(btn);
    document.querySelector("#tasks").appendChild(li);
    input.value = ""; // Clear the input field after adding the task
  }
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
