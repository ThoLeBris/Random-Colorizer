// ! Uncaught TypeError: Cannot read property 'addEventListener' of null 
// fonctionne pas

// Selectors
const addButton = document.querySelector('.btn-add');
const toDoList = document.querySelector('#list');
const toDo = document.querySelector('#todo');

const li = document.createElement('li');

li.appendChild(document.createTextNode(`${toDo.value}`));

// ---------------- Add Button
addButton.addEventListener('click',(e) =>{
    e.preventDefault();
    const li = document.createElement('li');
    li.className = "stufftodo";
    li.appendChild(document.createTextNode(`${toDo.value}`));

    if(toDoList.appendChild(li)){
         toDo.value = '';
    };
});