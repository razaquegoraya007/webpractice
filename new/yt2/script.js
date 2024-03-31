// Selecting Element
var hOne = document.querySelector("h1")
console.log(hOne)
// Changing H1
hOne.innerHTML = "DOM Parhly"


// Changing Style in CSS Selection
hOne.style.textAlign = "center"

// Event Listener
hOne.addEventListener("click",function(){
    // console.log("Clicked");
    hOne.innerHTML ="On Click Changed"
    hOne.style.backgroundColor = "#000"
    hOne.style.color = "yellow"
})