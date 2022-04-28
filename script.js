console.log("hello");
const selectedMovie = document.querySelector("#nameMovie");
const submitButton = document.querySelector("#submit");
const elem = document.querySelector("#movies");
let movie = selectedMovie.value;
submitButton.addEventListener("click", myFunction);
function myFunction() {
     movie = selectedMovie.value;
}

fetch(`http://www.omdbapi.com/?apikey=c6854d24&t=${movie}`)
    .then((response) => {
        return response.json();
    })
    .then((movie) =>{
        elem.innerHTML = "";
        showMovie(elem,
            movie.Title,
            movie.Plot,
            movie.Poster)
    });

const showMovie = (element, title, synopsis, img) => {
    element.innerHTML += `
    <div>
    <h1>${title}</h1>
    <p>${synopsis}</p>
    <img src="${img}">
    <p>END OF THE MOVIE SELECTED</p>
</div>`
};
