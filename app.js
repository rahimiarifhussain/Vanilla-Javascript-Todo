// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// fuction
function addTodo(event) {
//  console.log("hello");  /// hello
// Prevent form submitting
event.preventDefault();
//Todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
// Create Li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// CEHCK MARK Button
const compoletedButton = document.createElement('button');
compoletedButton.innerHTML = "<i class='fas fa-check'></i>";
compoletedButton.classList.add('complete-btn');
todoDiv.appendChild(compoletedButton);
// CEHCK trash Button
const TrashButton = document.createElement('button');
TrashButton.innerHTML = "<i class='fas fa-trash'></i>";
TrashButton.classList.add('trash-btn');
todoDiv.appendChild(TrashButton);
// APEND to LIST
todoList.appendChild(todoDiv);
// clear todo input value
todoInput.value="";
}

function deleteCheck(event) {
    // console.log(event.target) ;
    const item = event.target;
    // Delete TODO
    if(item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
    //   console.log(todo);
     todo.remove();
    }
}