let bancoDados = [
    {"tarefa":"Estudar JS","status":""},
    {"tarefa":"Estudar Projeto ToDoList", "status":"checked"}
];

const criarItem = (tarefa, status, indice) => {
    const item  = document.createElement('label');
    item.classList.add("to-do-item")
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice = ${indice}>
    `    
    document.getElementById("todoList").appendChild(item);
}

const limparTarefas = () =>{
    const todoList = document.getElementById("todoList");
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const renderTela = () => { /*arrow function*/
    limparTarefas();
    bancoDados.forEach((item, indice) => criarItem(item.tarefa, item.status, indice)); /*lê item a item*/
}

const adicionarTarefa = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === "Enter"){
        bancoDados.push({"tarefa": texto,"status":""});
        renderTela();     
        evento.target.value = '';
    }

}

const removerItem = (indice) => {
    bancoDados.splice (indice,1);
    renderTela()
}

const atualizarItem = (indice) => {
    bancoDados[indice].status = bancoDados[indice].status === '' ? 'checked' : '';
    renderTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === "button"){
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } 
    else if (elemento.type === "checkbox") {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}

document.getElementById("newtask").addEventListener("keypress",adicionarTarefa);
document.getElementById("todoList").addEventListener("click",clickItem)

renderTela();