let input = document.querySelector('.input')
let add = document.querySelector('.btn')
let todoList = document.querySelector('#todoList')

let todos = []

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(element => addTodo(element)) 
}
add.addEventListener('click',() => {
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addTodo(input.value)
    input.value = ''
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todoList.appendChild(para)
    
    
    para.style.textTransform = 'capitalize'
    para.addEventListener('click',() => {
        para.style.fontWeight = 'bold'
    })
    para.addEventListener('dblclick',() => {
        todoList.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
   let index = todos.indexOf(todo)
   if(index > -1){
    todos.splice(index,1)
   }
   localStorage.setItem('todos',JSON.stringify(todos))
}

