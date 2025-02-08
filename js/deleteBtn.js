import { deleteElement } from "./deleteElement.js";

export function deleteBtn(id) {
    const elementBtn = document.createElement("button"); 
    elementBtn.innerText = "\u2A09";
    elementBtn.classList.add("deleteBtn");

    elementBtn.addEventListener("click", function() {
        deleteElement(this.parentNode, id);
    })

    return elementBtn
}
