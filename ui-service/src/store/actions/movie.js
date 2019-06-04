import * as actionTypes from './actionTypes';
import { API_BASE_URL } from '../../costants/costants';

export const initMovies = (movies) => {
    return {
        type: actionTypes.INIT_MOVIES,
        movies: movies
    };
}

export const getMovies = () => {
    return dispatch => {
        fetch(API_BASE_URL + "movie/", {
            method: "GET",
            mode: "cors",
            headers: new Headers({
                'Access-Control-Allow-Origin': '*'
            })
        })
        .then( response => {
            return response.json()
        })
        .then( data => {
            dispatch(initMovies(data));
        })


    };
}

export const addMovie = (movie) => {
    return dispatch => {
        let dataForm = new FormData();
        dataForm.append("name", movie.name);
        dataForm.append("year", movie.year);
        dataForm.append("length", movie.length);
        dataForm.append("directorName", movie.director.name);
        dataForm.append("directorSurname", movie.director.surname);
        fetch(API_BASE_URL + "movie/add", {
            method: "POST",
            mode: "cors",
            headers: new Headers({
                'Access-Control-Allow-Origin': '*'
            }),
            body: dataForm
        })
        .then( response => {
            return response.json()
        })
        .then( data => {
            movie.id = data.id;
            movie.director.id = data.directorId;
            dispatch(createMovie(movie));
        })
    };

}

export const createMovie = (movie) => {
    return {
        type: actionTypes.ADD_MOVIE,
        movie: movie
    }
}

export const removeMovie = (index) => {
    return {
        type: actionTypes.DELETE_MOVIE,
        index: index
    }
}

export const deleteMovie = (id, index) => {
    return dispatch => {
        fetch(API_BASE_URL + "movie/delete/?id=" + id, {
            method: "DELETE",
            mode: "cors",
            headers: new Headers({
                'Access-Control-Allow-Origin': '*'
            })
        })
        .then( response => {
            dispatch(removeMovie(index));
        })
    }
}

export const changeTypeSearch = (type) => {
    return {
        type: actionTypes.CHANGE_TYPE_SEARCH,
        searchType: type
    }
}

export const setSearch = (word) => {
    return {
        type: actionTypes.SET_SEARCH,
        word: word
    }
}

export const setSort = (active) => {
    return {
        type: actionTypes.SET_SORT,
        active: active
    }
}
