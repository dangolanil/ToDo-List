const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("myTodoList");

const savedList = JSON.parse(localStorage.getItem("todos")) || [];

for(let i = 0; i < savedList.length; i++){
    let newItem = document.createElement("li");
    newItem.innerText = savedList[i].task;
    newItem.isCompleted = savedList[i].isCompleted ? true : false ;
    if(newItem.isCompleted){
        newItem.style.textDecoration = "line-through";

    }
    todoList.appendChild(newItem);
}

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newItem = document.createElement("li");
    let todoValue = document.getElementById("task").value;
    newItem.innerText = todoValue;
    newItem.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newItem);
    savedList.push({ task: newItem.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedList));
});

todoList.addEventListener("click", function(event){
    let clickedItem = event.target;

    if (!clickedItem.isCompleted) {
        clickedItem.style.textDecoration = "line-through";
        clickedItem.isCompleted = true;
      } else {
        clickedItem.style.textDecoration = "none";
        clickedItem.isCompleted = false;
      }

      for (let i = 0; i < savedList.length; i++) {
        if (savedList[i].task === clickedItem.innerText) {
          savedList[i].isCompleted = !savedList[i].isCompleted;
          localStorage.setItem("todos", JSON.stringify(savedList));
        }
      }
});