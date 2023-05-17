function addNewEle(p1) {
    let parentTag = p1.nextElementSibling;

    let msgTag = document.querySelector("#msgId");
    
    let msg = msgTag.value;
    
    let exitingValue = parentTag.innerHTML;
    
    let newValue = `<div style="font-size: 30px; margin-top: 5px; display: flex; justify-content: space-between">
    <div>${msg}</div>
    <input type="button" value="Delete" onclick="deleteTheMessage(this)" style="margin-left: 21px;" />
    </div>`;

    parentTag.innerHTML = newValue + exitingValue;

    msgTag.value="";
}
function deleteTheMessage(p1) {
    p1.parentElement.remove();
}