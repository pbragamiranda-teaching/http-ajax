// RECAP
document.querySelector(CSS_ATTR)
document.querySelectorAll(CSS_ATTR)

const btn = document.querySelector('#click-me')

btn.addEventListener(EVENT, CALL_BACK)
btn.addEventListener('click', (event) => {
  event.currentTarget.innerText = 'Please wait...'
  event.currentTarget.setAttribute('disabled', '')
})


// FETCH with GET
const list = document.querySelector('#results')

const searchMovie = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const newMovie = `<li>
          <img src="${movie.Poster}" alt="">
          <p>${movie.Title}</p>
        </li>`
        list.insertAdjacentHTML('beforeend', newMovie)
      });
    });
}

const searchForm = document.querySelector('#search-movies')

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = ''
  const userInput = event.currentTarget.querySelector('.form-control').value
  searchMovie(userInput);
})

searchMovie('Pulp Fiction')



// FETCH with POST
const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
