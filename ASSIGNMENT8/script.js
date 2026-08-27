var inputdata = document.getElementById("input-data");
var btnadd = document.getElementById("btnadd");
var list = document.getElementById("list");

// Add button
btnadd.addEventListener("click", () => {
    if (inputdata.value.trim() == "") { 
        alert("Task can't be empty");
    }

    else {
        var x = inputdata.value.trim();
        createTask(x);
        inputdata.value = "";
    }

});

//Task creation
function createTask(task) {
    var item = document.createElement("li");    
    item.setAttribute("data-status", "pending");

    //checkbox creation
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.height = "20px";
    checkbox.style.width = "25px";
    checkbox.style.margin = "5px";

    // Create task text
    var text = document.createElement("span");
    text.innerText = task;

    // Create Edit button
    var btnedit = document.createElement("button");
    btnedit.innerText = "Edit";
    btnedit.className = "edit";

    // Create Delete button
    var btndelete = document.createElement("button");

    btndelete.innerText = "Delete";
    btndelete.className = "delete";

    // Add elements to li
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(btnedit);
    item.appendChild(btndelete);

    // Add li to list
    list.appendChild(item);


    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            item.setAttribute("data-status", "completed");
            text.style.textDecoration = "line-through";
        }
        else {
            item.setAttribute("data-status", "pending");
            text.style.textDecoration = "none";
        }

    });

    //Edit task 
    btnedit.addEventListener("click", () => {
        var newTask = prompt("Edit your task:", text.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            text.innerText = newTask.trim();
        }
    });

    // Delete task
    btndelete.addEventListener("click", () => {
        item.remove();
    });

}

// filter- All tasks
var btnall = document.getElementById("all");
btnall.addEventListener("click", () => {
    var items = list.querySelectorAll("li");
    items.forEach((item) => {
        item.style.display = "flex";
    });
});

// Filter-pending tasks
var btnpending = document.getElementById("pending");
btnpending.addEventListener("click", () => {
    var items = list.querySelectorAll("li");
    items.forEach((item) => {
        if (item.getAttribute("data-status") == "pending") {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    });
});

// Filter-completed Tasks
var btncompleted = document.getElementById("completed");
btncompleted.addEventListener("click", () => {
    var items = list.querySelectorAll("li");

    items.forEach((item) => {
        if (item.getAttribute("data-status") == "completed") {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    });
});