// let tbody = document.querySelector("body")
var myForm = document.getElementById("add-post-form");
myForm.addEventListener("submit", onSubmit);
function onSubmit(ev) {
    ev.preventDefault();
    console.log("recived");
    addDivImg();
}
function addDivImg() {
    //get form input
    var inputImage = document.getElementById("inputImage");
    var inputCap = document.getElementById("inputHeader");
    var inputText = document.getElementById("inputText");
    //creats box div with elements
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    var newHead = document.createElement("h5");
    var newText = document.createElement("p");
    //fill the box
    newImg.setAttribute("src", inputImage.value);
    newHead.innerText = inputCap.value;
    newText.innerText = inputText.value;
    //order in html
    newDiv.appendChild(newImg);
    newDiv.appendChild(newHead);
    newDiv.appendChild(newText);
    newDiv.classList.add("classi");
    var gallery_Container = document.querySelector(".container");
    gallery_Container.appendChild(newDiv);
    //reset input
    inputImage.value = "";
    inputCap.value = "";
    inputText.value = "";
}
