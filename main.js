let button = document.getElementById("btn");

function changeMe(){
    button.textContent = "Changed";
}

button.addEventListener('click',changeMe)