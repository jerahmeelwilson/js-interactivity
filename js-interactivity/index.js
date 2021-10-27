console.log("Hello World");

const message = document.querySelector("#message");

const addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click",deleteMovie);
    movie.appendChild(deleteBtn);
    const movieList = document.querySelector("ul");
    movieList.appendChild(movie);
    inputField.value = "";
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched`;
    } else {
        message.textContent = `${event.target.textContent} added back`;
    }
    revealMessage();
}

const revealMessage = () => {
    message.classList.remove("hide");
    setTimeout(()=>message.classList.add("hide"),1000);
}


const form = document.querySelector("form");

form.addEventListener("submit",addMovie);

