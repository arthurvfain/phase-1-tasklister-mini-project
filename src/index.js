document.addEventListener("DOMContentLoaded", () => {});
document.querySelector('#create-task-form').addEventListener('submit',e =>
{
  e.preventDefault();
  //console.log(e)
  let toDoElement =
  {
    newTaskDescription: e.target[0].value
  }
  return toDoElement
  //console.log(toDoElement.newTaskDescription)
})
console.log(toDoElement.newTaskDescription)
//document.querySelector('#tasks').appendChild(toDoElement.newTaskDescription.value)