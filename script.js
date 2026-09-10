//grab elements from the page
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

//array to store tasks
let tasks[];

//function to render the list on the page
function renderTasks() {
	taskList.innerHTML = "";
	for (let i=0; i<tasks.length; i++) {
		let li = document.createElement("li");
		if (tasks[i].completed)  {
			li.classList.add("completed");
		}

		let span = document.createElement("span");
		span.textContent = tasks[i].text;
		span.addEventListener("click" , function() {
			tasks[i].completed = !tasks[i].completed;
			renderTasks();
		});

		let deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.classList.add("delete-btn");
		deleteBtn.addEventListener("click" , function(){
			tasks.splice(i,1):
			renderTasks();
		});
		li.appendChild(span);
		li.appendChild(deleteBtn);
		taskList.appendChild(li);
	}
}

//function to add a new task
function addTask() {
	let taskText = taskInput.value.trim();
	if (taskText === "") {
		return;
	}
	tasks.push({text: taskText; completed: false});
	taskInput.value = "";
	renderTasks();
}

// event listeners
addBtn.addEventListener("click" , addTask);
taskInput.addEventListener("keypress" , function(event)) {
	if (event.key === "Enter") {
		addTask();
	}
});
