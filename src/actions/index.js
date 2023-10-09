// {
//     type:'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }


  

// export function handleMovieSearch(movie) {
//   const url = `https://www.omdbapi.com/?apikey=f324ff83&s=${movie}`;

//   return  (dispatch)=> {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log("movie", movie);
//       });

//     dispatch(addMoviesSearchResult(movie))
//   };
// }

// export function handleMovieSearch(movie) {
//     // console.log('inside', movie);
//     try{
//         return function (dispatch) {
//         const url = `https://www.omdbapi.com/?apikey=f324ff83&s=${movie}`;
//         console.log('url');
//         fetch(url)
//             .then((response) => {
//                 console.log('response',response);
//                 return response.json()})
//             .then((movie) => {
//             console.log('movie', movie);
//             //   dispatch action to save search results in store
//             dispatch(addMoviesSearchResult(movie));
//             });
//         };
//     }catch(error){
//         console.log('error ',error)
//     }
//   }

  export function handleMovieSearch(searchText) {
    
    return async function (dispatch) {
    //   console.log(dispatch);
      const url = `https://www.omdbapi.com/?apikey=f324ff83&t=${searchText}`;
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          // dispatch action to save search results in store
          dispatch(addMoviesSearchResult(movie));
          console.log(movie)
        });
    };
  }

// export function handleMovieSearch(movie) {
//     try {
//       const url = `https://www.omdbapi.com/?apikey=f324ff83&t=${movie}`;
//       fetch(url)
//         .then((response) => {
//           return response.json();
//         })
//         .then((movieData) => {
//             console.log(movieData);
//         //   dispatch(addMoviesSearchResult(movie));
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
// //   handleMovieSearch("thor");
  

export function addMoviesSearchResult (movie){
    return {type:ADD_SEARCH_RESULT, movie};
}