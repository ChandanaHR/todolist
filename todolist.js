function addtask()
{
    var task = document.getElementById('task').value;
    if(task=='')
    {
        alert("Please enter a task!");
        return;
    }
    var taskList = document.getElementById("tasklist");
    var li = document.createElement('li');
    li.innerHTML = task+'<button class="delete-btn" onclick="deletetask(this)">Delete</button>'
    taskList.appendChild(li);
    document.getElementById('task').value='';
}

function deletetask(element)
{
    element.parentElement.remove();
}