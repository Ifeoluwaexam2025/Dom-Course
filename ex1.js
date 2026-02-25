let div = document.createElement("div")
div.textContent = "Hello, World!"
document.body.appendChild(div)

let secondExercise = document.querySelector(".example");
secondExercise.textContent = "This is my second exercise.";
secondExercise.style.color = "blue";
secondExercise.style.fontSize = "20px";
secondExercise.style.fontWeight = "bold";
//adding an event listener to the second exercise
secondExercise.addEventListener("click", function(){
    alert("You clicked the second exercise!");
    let childelement = document.createElement("p");
    childelement.textContent = "You clicked the second exercise!";
    childelement.style.color = "red";
    secondExercise.appendChild(childelement);
});
let newListItem = document.createElement("li");
newListItem.textContent = "New Item";
let list = document.querySelector("ol");
list.appendChild(newListItem);