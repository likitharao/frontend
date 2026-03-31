

let input = document.querySelector(".task");
let button = document.querySelector(".btn");
let dateInput = document.querySelector("#duedate");
let tasklist = document.querySelector(".task-list");

let allBtn = document.querySelector("#all");
let activeBtn = document.querySelector("#active");
let completeBtn = document.querySelector("#completed");

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];


function displayTasks() 
{
  tasklist.innerHTML = ""; 

  allTasks.forEach(function(task, index) {

    let taskItem = document.createElement("div");
    taskItem.innerText = task.text;

    
    if (task.completed) {
      taskItem.classList.add("completed");
    }

    
    taskItem.addEventListener("click", function() {
      task.completed = !task.completed; 
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      displayTasks(); 
    });

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(event) {
      event.stopPropagation(); 

     
      allTasks.splice(index, 1);

      
      localStorage.setItem("tasks", JSON.stringify(allTasks));

      displayTasks(); 
    });

    taskItem.appendChild(deleteBtn);
    tasklist.appendChild(taskItem);
  });
}



displayTasks();



button.addEventListener("click", function() {

  let tasktext = input.value;

  if (tasktext.trim() === "") {
    alert("Enter a task");
    return;
  }

  allTasks.push({
    text: tasktext,
    completed: false
  });

  localStorage.setItem("tasks", JSON.stringify(allTasks));

  input.value = "";

  displayTasks(); 
});



allBtn.addEventListener("click", function() {
  let tasks = document.querySelectorAll(".task-list div");

  tasks.forEach(function(task) {
    task.style.display = "flex";
  });
});


activeBtn.addEventListener("click", function() {
  let tasks = document.querySelectorAll(".task-list div");

  tasks.forEach(function(task) {
    if (task.classList.contains("completed")) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
});


completeBtn.addEventListener("click", function() {
  let tasks = document.querySelectorAll(".task-list div");

  tasks.forEach(function(task) 
  {
    if (task.classList.contains("completed"))
         {
      task.style.display = "flex";
    }
     else 
    {
      task.style.display = "none";
    }
  });
});