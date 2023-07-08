const addbtn = document.getElementById("addtodo");
const container = document.querySelector(".container");
const todoinput = document.getElementById("todoinput");

addbtn.addEventListener("click", function() {
  const inputValue = todoinput.value.trim();

  if (inputValue !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = inputValue;
    paragraph.classList.add("paragraph");

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.classList.add("deletebtn");

    todoItem.appendChild(checkbox);
    todoItem.appendChild(paragraph);
    todoItem.appendChild(deletebtn);
    
    container.appendChild(todoItem);

    todoinput.value = "";

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        paragraph.style.textDecoration = "line-through";
      } else {
        paragraph.style.textDecoration = "none";
      }
    });

    deletebtn.addEventListener("click", function() {
      container.removeChild(todoItem);
    });
  }
});
