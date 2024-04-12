import { todoListContainer,
                searchInput,
                formTodo, 
                colorPicker, 
                taskList, 
                filterElements 
        } from "./constant.js";
import { createListener } from "./helpers.js";

createListener("colorPicker", "input", (e) => {
    localStorage.setItem('bgColor', e.target.value);
    document.body.style.backgroundColor = e.target.value;
});


createListener("addTodoForm", "submit", (e) => {
    e.preventDefault();

    const inputValue = document.getElementById('todoInput').value;
    document.getElementById('todoInput').value = '';
    const task = {
        isDone: false,
        todo: inputValue
    }

    if(inputValue !== ""){
    taskList.push(task);  
    }
    changeLocaleStorage();
    renderList();
})

//-------------------------------------------------------------------
function filterSelector(){
    const pending = [];
    const completed = [];

    const filterValue = filterElements.value;

    for(let i in taskList){
        console.log(taskList[i].isDone);
        if(taskList[i].isDone = "false"){
            pending.push(taskList[i])
        } else{
            completed.push(taskList[i]);
        }
    }
    console.log(pending);

}
console.log(taskList);
console.log(filterElements.value);



console.log(filterSelector());





//-------------------------------------------------------------------



function handleSearch(){
    const value = searchInput.value.toLowerCase();
    const filtered = taskList.filter((task)=> {
        return task.todo.toLowerCase().match(value);
    })
    renderList(filtered);
}

searchInput.addEventListener("input", handleSearch)

function changeLocaleStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function changeTodo(e){
    const element = e.target;
    const parent = element.parentElement;
    const index = parent.dataset.index
    if(element.className === "doneBtn"){
        taskList[index].isDone = !taskList[index].isDone;
        changeLocaleStorage();
        renderList();
    } else if(e.target.className === "removeBtn"){
        taskList.splice(index,1)
        changeLocaleStorage();
        renderList();
    }
    
}

todoListContainer.addEventListener("click", changeTodo);

function renderList(listData = taskList) {
    const liElements = listData.map((item, index) => {
        const myCLass = item.isDone ? "done" : "";
        return (
                `
                    <li data-index=${index} class="${myCLass}">${item.todo} 
                        <button class="removeBtn">&#10062;</button> 
                        <button class="doneBtn">&#9989;</button>
                    </li>
                `
        ) 
    });

    todoListContainer.innerHTML = liElements.join('');   
};


(function() {
    const bgColor = localStorage.getItem('bgColor');
    document.body.style.backgroundColor = bgColor;
    renderList();
})();


