// document.addEventListener("DOMContentLoaded", function(){

//     let todoForm = document.getElementById("todoForm");
//     let todoList = document.getElementById("myTodoList");

//     // todoForm.addEventListener("submit", function(event){
//     //     event.preventDefault();

//     //     let removeButton = document.createElement("button");
//     //     removeButton.innerText = "Remove Item";

//     //     let newTodo = document.createElement("li");
//     //     newTodo.innerText = document.getElementById("task").value;

//     //     todoList.appendChild(newTodo);
//     //     newTodo.appendChild(removeButton);
    
//     //     todoForm.reset();
//     // });

    // todoList.addEventListener("click", function(event){
    //     const targetTagToLowerCase = event.target.tagName.toLowerCase();
    //     if (targetTagToLowerCase === "li") {
    //       event.target.style.textDecoration = "line-through";
    //   } else if (targetTagToLowerCase === "button") {
    //      event.target.parentNode.remove();
    // }
    // });

// });

const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("myTodoList");

const savedList = JSON.parse(localStorage.getItem("todos")) || [];

for(let i = 0; i < savedList.length; i++){
    let newItem = document.createElement("li");
    newItem.innerText = savedList[i].task;
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove Item";
    newItem.isCompleted = savedList[i].isCompleted ? true : false ;
    if(newItem.isCompleted){
        newItem.style.textDecoration = "line-through";
    }
    newItem.appendChild(removeButton);
    todoList.appendChild(newItem);
}

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newItem = document.createElement("li");
    let todoValue = document.getElementById("task").value;
    newItem.innerText = todoValue;
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove Item";
    newItem.isCompleted = false;
    todoForm.reset();
    todoList.appendChild(newItem);
    newItem.appendChild(removeButton);
    savedList.push({ task: todoValue, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedList));
});

todoList.addEventListener("click", function(event){
    let clickedItem = event.target;

    todoList.addEventListener("click", function(event){
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        if (targetTagToLowerCase === "li") {
          event.target.style.textDecoration = "line-through";
          clickedItem.isCompleted = true;
         // savedList.push({ task: savedList[i].task, isCompleted: true });
      } else if (targetTagToLowerCase === "button") {
         event.target.parentNode.remove();
    }
    });
    

    // if (!clickedItem.isCompleted) {
    //     clickedItem.style.textDecoration = "line-through";
    //     clickedItem.isCompleted = true;
    //   } else {
    //     clickedItem.style.textDecoration = "none";
    //     clickedItem.isCompleted = false;
    //   }

      for (let i = 0; i < savedList.length; i++) {
        if (savedList[i].task === clickedItem.innerText) {
       // savedList[i].isCompleted = true;
          savedList.push({ task: savedList[i].task, isCompleted: true });
          localStorage.setItem("todos", JSON.stringify(savedList));
        }
      }
});