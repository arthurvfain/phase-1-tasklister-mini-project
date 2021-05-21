document.addEventListener("DOMContentLoaded", () => {});
document.querySelector('#create-task-form').addEventListener('submit',e =>
{
  e.preventDefault();
  //console.log(e)
  let toDoElement =
  {
    newTaskDescription: e.target['new-task-description'].value
  }
  appendToDoOnDOM(toDoElement);
  //console.log(toDoElement.newTaskDescription)
})

function appendToDoOnDOM(toDoObj)
{
  let li = document.createElement('li')
  li.textContent = toDoObj.newTaskDescription
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'X'
  deleteButton.style.background='#f00'
  deleteButton.style.width = '200px'
  deleteButton.style.height = '200px'
  deleteButton.style.fontSize = '180px'
  deleteButton.addEventListener("click", (e) => e.target.parentElement.remove())
  li.appendChild(deleteButton)
  document.querySelector('#tasks').appendChild(li)
  
}


// // Grab Elements From the DOM
// let taskForm = document.querySelector('#create-task-form')


// // Add Event Listeners to DOM Elements
// taskForm.addEventListener('submit', grabFormValues)


// // Manipulate  Data
// function grabFormValues(e){
//   e.preventDefault();
//   let toDoElement =
//   {
//     newTaskDescription: e.target['new-task-description'].value
//   }

//   appendToDoOnDOM(toDoElement);
// }

// // Append/Add Back to DOM
// function appendToDoOnDOM(toDoObj)
// {
//   let li = document.createElement('li')
//   li.textContent = toDoObj.newTaskDescription

//   let deleteButton = document.createElement('button')
//   deleteButton.textContent = 'X'

//   deleteButton.addEventListener("click", (e) => e.target.parentElement.remove())
  
//   li.appendChild(deleteButton)
//   document.querySelector('#tasks').appendChild(li)
  
// }