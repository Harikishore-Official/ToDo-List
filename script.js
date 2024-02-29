function AddTask(){
    var content=document.getElementById("user-input").value;
    var element=document.getElementById("task-container")
    var newElement= document.createElement('div');
    newElement.setAttribute('id','ind-task')
    newElement.innerHTML='<h2>Task :</h2>'+'<h2>'+content+'</h2>'+'<br><button onclick="deletetask(event)">delete</button>'
    element.append(newElement) 
}
function deletetask(event)
{
    event.target.parentNode.remove();
}