

let input=document.querySelector(".task");

let button=document.querySelector(".btn");

let tasklist=document.querySelector(".task-list");

button.addEventListener("click",function()
{


let tasktext= input.value;

let taskItem=document.createElement("div");
taskItem.textContent=tasktext;
tasklist.appendChild(taskItem);


});