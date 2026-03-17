document.getElementById("addparagraph").addEventListener("click",function() {
    let para = document.createElement("p");
    let text = document.createTextNode("This is a new paragraph");
    para.appendChild(text);
    document.getElementById("paracontainer").appendChild(para)
});
