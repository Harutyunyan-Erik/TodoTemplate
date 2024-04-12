const todoListContainer = document.getElementById('todoList'); //<ul></ul>;
const taskList = JSON.parse(localStorage.getItem('taskList')) || [] ;
const searchInput = document.getElementById("searchInput");
const formTodo = document.getElementById("addTodoForm");
const colorPicker = document.getElementById("colorPicker");
const filterElements = document.getElementById("filter");


export {
    todoListContainer,
    taskList,
    searchInput,
    formTodo,
    colorPicker,
    filterElements
}
