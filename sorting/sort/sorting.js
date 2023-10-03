'use strict';

class Movie {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
}

function sortByRecentYear(movie) {
    return movies.sort((a, b) => b.year - a.year);
}

function sortByTitle(movies) {
    
    const ignoreThese = (title) => title.replace(/^(A|An|The) /i, '');

    return movies.sort((a, b) => {
        const titleA = ignoreThese(a.title);
        const titleB = ignoreThese(b.title);
        return titleA.localeCompare(titleB);
    });
}

const movies = [
    new Movie("The Shawshank Redemption", 1994, ["Drama"]),
    new Movie("The Godfather", 1972, ["Crime", "Drama"]),
    new Movie("The Dark Knight", 2008, ["Action", "Crime", "Drama"]),
    new Movie("A Clockwork Orange", 1971, ["Crime", "Drama", "Sci-Fi"]),
    new Movie("An Inception", 2010, ["Action", "Adventure", "Sci-Fi"]),
];

console.log(sortByRecentYear);