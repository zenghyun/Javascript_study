const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');

const movies = [];

const renderMoives = (filter = '') => {
    const movieList = document.querySelector('#movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter 
    ? movies 
    : movies.filter(movie => movie.info.title.includes(filter)); 
    
    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li');
        const { info, ...otherProp } = movie;
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie; 
        // getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle.call(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    })
}
 
const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    if (
        title.trim() === null ||
        extraName.trim() === null ||
        extraValue.trim() === null) {
        return;
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === ''){
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            }, 
            get title() {
                return this._title;
            },
            [extraName]: extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    };
    newMovie.info.title = title;
    console.log(newMovie.info.title); 

    movies.push(newMovie);
    renderMoives();
};

const searchMovie = () => {
    const filterTerm = document.querySelector('#filter-title').value; 
    renderMoives(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovie);