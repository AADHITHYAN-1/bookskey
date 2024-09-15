// select overlay button popupbox
var popoverlay = document.querySelector(".popupoverlay")
var box = document.querySelector(".popupbox")
var addbutton = document.getElementById("addpopup")

addbutton.addEventListener("click",function(){
    popoverlay.style.display ="block"
    box.style.display ="block"
})
//select cancel button
var cancel=document.getElementById("cancelbook")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display ="none"
    box.style.display ="none"
})
//select container,addbook,booktittle,bookauthor,book-des
// JavaScript
var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var booktittle = document.getElementById("booktittle");
var author = document.getElementById("bookauthor");
var description = document.getElementById("bookdescription");
// Add event listener to the add book button
addbook.addEventListener("click", function (event) {
    event.preventDefault();
    // Create a new div element for the book
    var div = document.createElement("div");
    div.setAttribute("class", "book");

    // Set the inner HTML of the new book element
    div.innerHTML = `
        <h2>${booktittle.value}</h2>
        <h5>${author.value}</h5>
        <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    // Append the new book element to the container
    container.appendChild(div);

    // Hide the popup and overlay
    popoverlay.style.display = "none";
    box.style.display = "none";
});

// Function to delete a book
function deletebook(event) {
    event.target.parentElement.remove();
}
