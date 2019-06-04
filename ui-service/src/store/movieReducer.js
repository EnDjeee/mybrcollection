import * as actionTypes from './actions/actionTypes';





const initialState = {
    movies: [],
    count: null,
    search: "",
    selected: "movie",
    placeholder: "Search Movies",
    sort: {
        active: "",
        direction: "asc"
    }
};

const initMovies = (state, action) => {
    return {
        ...state,
        movies: action.movies,
        count: action.movies.length
    }

}

const addMovie = (state, action) => {
    let movies = [...state.movies];
    movies.splice(0,0, action.movie)
    return {
        ...state,
        movies: movies,
        count: state.count + 1
    }

}

const deleteMovie = (state, action) => {
    let movies = [...state.movies];
    movies.splice(action.index, 1);
    return {
        ...state,
        movies: movies,
        count: state.count -1
    }
}

const changeTypeSearch = (state, action) => {
    let placeholder = "";
    if(action.searchType === "movie") placeholder = "Search Movies";
    else placeholder = "Search Directors"
    return {
        ...state,
        selected: action.searchType,
        placeholder: placeholder

    }
}

const setSearch = (state, action) => {
    return {
        ...state,
        search: action.word
    }
}

const setSort = (state, action) => {
    let dir = state.sort.direction;
    if(state.sort.active !== "") {
        if(state.sort.direction === "asc") dir = "desc";
        else dir = "asc";
    }
    return {
        ...state,
        sort: {
            active: action.active,
            direction: dir
        }

    }
}

const movieReducer = (state=initialState, action) => {
    switch( action.type) {
        case(actionTypes.INIT_MOVIES) : return initMovies(state, action);
        case(actionTypes.ADD_MOVIE) : return addMovie(state, action);
        case(actionTypes.DELETE_MOVIE) : return deleteMovie(state, action);
        case(actionTypes.CHANGE_TYPE_SEARCH) : return changeTypeSearch(state, action);
        case(actionTypes.SET_SEARCH) : return setSearch(state, action);
        case(actionTypes.SET_SORT) : return setSort(state, action);
        default: return state;
    }
}

export default movieReducer;
