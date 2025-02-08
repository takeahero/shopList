export function updateElement(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.amount;
}
