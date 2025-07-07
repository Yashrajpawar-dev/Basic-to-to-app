
const taskInput = document.getElementById("task-Input");

const taskList = document.querySelector(".task-List");
const addbutton = document.getElementById("add-button");


addbutton.addEventListener('click', function(e){
  const text = taskInput.value.trim();
    if(text ""){
    alert("Enter the task!")
    return;
}else{
    addNewTask()
}
})


 function addNewTask(){
const li = document.createElement('li')
li.innerText = taskInput.value
taskList.appendChild(li)
taskInput.value   = ""
updateLocalStorage()
 }

taskList.addEventListener("click", (e) => {
  /* Delete clicked */
  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
updateLocalStorage()
    return;
    
  }
const li = e.target.closest("li");
  if (li) {
    li.classList.toggle("completed");
  updateLocalStorage()
  }})
function createTask(taskInput) {
  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete-button">✖</button>
  `;
  taskList.appendChild(li);
}
 function updateLocalStorage(){
 localStorage.setItem("data", taskList.innerHTML)
 }
 function displayTask(){
    taskList.innerHTML = localStorage.getItem('data')
 }
 displayTask();