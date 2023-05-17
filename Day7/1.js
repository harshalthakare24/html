document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.innerText = todoText;
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        
        todoItem.classList.add("todo-item");
        todoItem.appendChild(textSpan);
        todoItem.appendChild(deleteButton);
        
        todoList.appendChild(todoItem);
        todoInput.value = "";
  
        deleteButton.addEventListener("click", function() {
          todoList.removeChild(todoItem);
        });
      }
    });
  });
  