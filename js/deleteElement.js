import {items} from './index.js'

export function deleteElement(tag, id) {
    tag.remove();

    items.splice(items.findIndex(element => element.id === id), 1);
    localStorage.setItem("items", JSON.stringify(items));

}
