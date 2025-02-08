import {createElement} from '../js/creatElement.js';
import {updateElement} from '../js/updateElement.js';

const form = document.getElementById("newItem");
const list = document.getElementById("list");
export const items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((element) => {
    createElement(element);
})

form.addEventListener("submit", (event) => {
    event.preventDefault() 
    
    const name = event.target.elements["name"];
    const amount = event.target.elements["amount"];

    const exists = items.find(element => element.name === name.value);

    const currentItem = {
        "name": name.value,
        "amount": amount.value
    }

    if(exists) {
        currentItem.id = exists.id;
        
        updateElement(currentItem);

        items[items.findIndex(element => element.id === exists.id)] = currentItem;

    }else{
        currentItem.id = items[items.length -1] ? (items[items.length-1]).id +1 : 0;

        createElement(currentItem);

        items.push(currentItem);
    }

    localStorage.setItem("items", JSON.stringify(items));

    name.value = "";
    amount.value = "";
})
