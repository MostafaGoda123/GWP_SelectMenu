let selectField = document.querySelector(".selectField")
let arrow = document.querySelector(".arrow")
let options = document.querySelector(".options")
let allOptions = document.querySelectorAll(".options li")
let selectText = document.querySelector("#selectText")

allOptions.forEach(op => {
   op.onclick = function () {
      selectText.innerHTML = op.innerHTML ;
      options.classList.add("hide")
      arrow.classList.remove("rotate")
   }
})
selectField.addEventListener("click" , function () {
   arrow.classList.toggle("rotate")
   options.classList.toggle("hide")
})