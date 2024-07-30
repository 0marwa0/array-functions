let todo = [
  { name: "clean your room", id: 480924080, selected: false },
  { name: "do the missions", id: 489484989, selected: true },
];
let deleteID;
let addbtn = document.getElementById("add");
let input = document.getElementById("input-text");
let update_text = document.getElementById("update-text");
let selectedTask;
let deleteBtn = document.getElementById("delete");
let list = document.getElementById("list");

let save = document.getElementById("save");
addbtn.addEventListener("click", () => {
  todo.push({ name: input.value, selected: false, id: 820480 });
  displayTodo();
});

input.addEventListener("input", (e) => {
  console.log(e);
  let searchValues = todo.filter((item) => {
    return item.name.includes(input.value);
  });
  todo = searchValues;
  displayTodo();
});

let displayTodo = () => {
  list.innerHTML = "";
  todo.forEach((task) => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => {
      let updatedArray = todo.filter((item) => {
        return item.id != task.id;
      });
      todo = updatedArray;
      displayTodo();
    });
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        update_text.value = task.name;
        // loop through the array and update the task with new task that the user enter
        selectedTask = task;
        // call displayTodo
      }
    });

    li.textContent = task.name;
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};

let saveChanges = (task) => {
  let updated = todo.map((item) => {
    if (item.id == task.id) {
      return { ...item, name: update_text.value };
    } else {
      return item;
    }
  });
  todo = updated;
  console.log(updated);
  displayTodo();
};
save.addEventListener("click", () => {
  saveChanges(selectedTask);
});

displayTodo();
