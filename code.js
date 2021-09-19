function addElement() {
    alert("Works, add");
    let label = document.createElement("label");
    let tnode = document.createTextNode("text");
    label.appendChild(tnode);
    document.body.appendChild(label);
}
function removeElement() {
    alert("Works. remove");
    let elem = document.getElementById("remove");
    document.body.removeChild(elem);
}

function alterElement() {
    alert("Works, alter");
    para = document.getElementsByClassName("grid track");
    para.innerHTML = "HI!";
}
