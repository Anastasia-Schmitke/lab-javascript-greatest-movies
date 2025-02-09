/* eslint no-restricted-globals: 'off' */
const myMovies = require("./data.js");
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    return movies.slice().sort(function(a, b){

        if (a.year < b.year){
            return - 1;
        }else if (b.year < a.year){
            return 1;
        }else{
            return a.title.localeCompare(b.title);
        }
    })
 }
 //console.log(orderByYear(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (movieArr){
    return movieArr.filter(function(movie){
        if ((movie.director === "Steven Spielberg") && (movie.genre.includes("Drama"))){
        return movie;
        }
    }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr){
    return movieArr.slice().map(movieArr => movieArr.title).sort().slice(0,20);
} 

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
