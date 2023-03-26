//alert("hello")

const task = document.querySelector("#task");
const todolist = document.querySelector("#todo-list")
const form = document.querySelector("form");

//addEventListener for submit event

form.addEventListener('submit', (event) => {
    event.prvenDtefault();

    //get the value of taskInput

    const Tasktext = task.value;

    //make one list item

    const listItem = document.createElement("li")
    listItem.listContant = Tasktext

    //appendChild

    todolist.appendChild = (listItem)
    //clear the value
    task.value = "";

})

