let parent = document.getElementById("track_parent");
let trackInsert = '<input type="text" name="track" class="inputForm" id="remove"/>';
let additionalTracks = 1;


function addElement() {
    //alert("Works, add");
    // let label = document.createElement("label");
    // let tnode = document.createTextNode("text");
    // label.appendChild(tnode);
    // document.body.appendChild(label);
    if (additionalTracks < 20) {
       parent.insertAdjacentHTML("beforeend",trackInsert);
       additionalTracks++;
    }
    
}
function removeElement() {
    //alert("Works. remove");
    let elem = document.getElementById("remove");
    parent.removeChild(elem);
}

function alterElement() {
    //alert("Works, alter");
    para = document.getElementsByClassName("grid track");
    para.innerHTML = "HI!";
}
