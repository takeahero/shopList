import { deleteBtn } from "./deleteBtn.js";

export function createElement(item) {

    const newItem = document.createElement("li");
    newItem.classList.add("item");

    const itemNumber = document.createElement("strong");
    itemNumber.innerHTML = item.amount;
    itemNumber.dataset.id = item.id 

    const itemName = document.createElement("span");
    itemName.innerText = item.name;
    itemName.classList.add("itemName")

    newItem.appendChild(itemNumber);
    newItem.appendChild(itemName);
    newItem.appendChild(deleteBtn (item.id));

    list.appendChild(newItem);

}
