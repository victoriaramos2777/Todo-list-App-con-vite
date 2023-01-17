import '../assets/styles/style.scss'

import { setupCounter } from './modules/counter.js'

//importar de nuestro modulos
import Items from "./modules/add-remove.js";
import ToDoItem from "./modules/item-constructor.js";
import LocalStorage from "./modules/Local-storage.js";
//constantes iniciales  
const main = document.getElementById('todo-item');
const form = document.getElementById('form');

const inputDescription = document.getElementById('todo-item');

const itemsContainer =document.getElementById('todo-cont');

//constante para estilo del icono 

//llamar data si existe  encuanto cargue la pagina 

Items.displayItems();

//evento de escucha de la forma
form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
//Evenmto de escucha main para ingreasr a elementos

main.addEventListener('keypress', (e) => {
// Obtener los valores
const description = inputDescription.value;
//validacion 
if (description == ''){

}
// mandar los valores 
if(e.key === 'Enter' && description != '') {
    const item = new ToDoItem(false, description);

    // Agrear un nuevo todo
    Items.addItem(item);

    //agregarlo al local Storage
    LocalStorage.addItem(item);

    // Limpiar la input
    Items.clearInput();
  }
});

// Evento de escucha para remover elementos
itemsContainer.addEventListener('click', (e) => {
    // Remover Elemento
    if(e.target.classList.contains('remove')){
      Items.removeItem(e.target);
      LocalStorage.removeItem(
        e.target.parentElement.previousElementSibling.lastElementChild.textContent,
        );  
    }
  });


  
//evento de escucha para el icono




   
   

