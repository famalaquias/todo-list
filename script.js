/* 
  variáveis:
*/
const textInput = document.querySelector('#texto-tarefa');
const listTask = document.querySelector('#lista-tarefas');

const buttonCreateTask =  document.querySelector('#criar-tarefa');
const buttonClearTask =  document.querySelector('#apaga-tudo');
const buttonDeletTask =  document.querySelector('#remover-finalizados');
const buttonSalve =  document.querySelector('#salvar-tarefas');

/* 
  função handleCreateTask: cria uma nova lista com a nova tarefa adicionada
  no input e faz a ordenação dessa lista por ordem de criação;
*/
function handleCreateTask () {
  const createNewTask = document.createElement('li');
  createNewTask.innerText = textInput.value;

  listTask.appendChild(createNewTask);
  textInput.value = "";
}

/* 
  função handleClickTask: altera a cor de fundo do item da lista para cinza
  quando clicado;
*/
function handleClickTask(e) {
  const color = document.querySelector('.gray');
  
  if (color) {
    color.classList.remove('gray');
  }

  e.target.classList.add('gray');
}

/* 
  função handleCompleteTask: risca o item da lista que foi completado;
*/
function handleCompleteTask(e) {
  const completedTask = e.target;

  if (completedTask.className === 'gray') {
    completedTask.classList.add('completed');
  } else {
    completedTask.classList.remove('completed')
  }
}

/* 
  função handleClearTask: apaga todos os itens da lista;
*/
function handleClearTask() {
  listTask.innerText = '';
}

/* 
  função handleDeletedTask: apaga todos os itens da lista;
*/
function handleDeletedTask() {
  const completed = document.querySelectorAll('.completed');

  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}

/*
  Eventos
*/
buttonCreateTask.addEventListener('click', handleCreateTask);
listTask.addEventListener('click', handleClickTask);
listTask.addEventListener('dblclick', handleCompleteTask);
buttonClearTask.addEventListener('click', handleClearTask);
buttonDeletTask.addEventListener('click', handleDeletedTask);
buttonSalve.addEventListener('click', handleSalveTask);