export function createDiv(id, className) {
    let div = document.createElement('div');
    div.id = id;
    if (!(typeof className === "undefined" || className === null || className === "")) {
        div.className = className;
    }
    return div;
}