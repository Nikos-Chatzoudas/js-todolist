const addbtn = document.getElementById("addtodo");
const container = document.querySelector(".container");
const todoinput = document.getElementById("todoinput");

addbtn.addEventListener("click", function () {
  const inputValue = todoinput.value.trim();

  if (inputValue !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const paragraph = document.createElement("p");
    paragraph.textContent = inputValue;
    paragraph.classList.add("paragraph");

    const editbtn = document.createElement("button");
    editbtn.classList.add("editbtn", "fa", "fa-solid", "fa-pen-to-square");

    const deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn", "fa-solid", "fa-trash");

    todoItem.appendChild(checkbox);
    todoItem.appendChild(paragraph);
    todoItem.appendChild(editbtn);
    todoItem.appendChild(deletebtn);

    container.appendChild(todoItem);

    todoinput.value = "";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        paragraph.style.textDecoration = "line-through";
      } else {
        paragraph.style.textDecoration = "none";
      }
    });

    deletebtn.addEventListener("click", function () {
      container.removeChild(todoItem);
    });

    editbtn.addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "text";
      input.value = paragraph.textContent;
      input.classList.add("input");

      const updateText = function () {
        const updatedText = input.value.trim();
        if (updatedText !== "") {
          paragraph.textContent = updatedText;
        }

        input.replaceWith(paragraph);
      };

      input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          updateText();
        }
      });

      input.addEventListener("blur", function () {
        updateText();
      });

      paragraph.replaceWith(input);
      input.focus();
    });
  }
});
