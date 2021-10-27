const button = document.querySelector(".btn")
const messege = document.querySelector(".massege")
const input = document.querySelector("input")


button.addEventListener("click", function () {

    messege.innerHTML = `Ok ... i'm sorry i don't have an answer to your question.
    I made this page to use DOM just to finish my project ..`
    input.remove()


})