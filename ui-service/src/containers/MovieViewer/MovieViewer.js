import React, { Component } from 'react';
import * as actions from '../../store/actions/movie';
import { connect } from 'react-redux';
import MyTable from '../../components/MyTable/MyTable';


class MovieViewer extends Component {

    componentDidMount() {
        this.props.initMovies();
    }

    
    render (){

        let movies = this.props.mv;
        let moviesCount = this.props.count;
        if(this.isSearchFieldNotEmpty()) {
            let searchKeyword = this.props.search.toLowerCase();

            if(this.props.searchType === "movie") {
                movies = this.searchMoviesByMovieName(movies, searchKeyword);
            }
            else {
                movies = this.searchMoviesByDirectorName(movies, searchKeyword);
                moviesCount = movies.length
                
            }
        }
        if(this.isTableAttributeClicked()) {
            let tableAttributeClicked = this.props.active;

            if(tableAttributeClicked === "length"){
                movies = this.sortMoviesByMovieLength(movies);
            }
            else {
                movies = this.sortMoviesByMovieYear(movies);
            }
        }
        return (
            <div>
                <MyTable sort={this.props.setSort} active={this.props.active} direction={this.props.direction} data={movies} deleteMovie={this.props.deleteMovie} count={moviesCount}/>
            </div>
        );
    }

    isSearchFieldNotEmpty = () => {
        return this.props.search != "";
    }

    searchMoviesByMovieName = (movies, movieName)  => {
        movies = movies.filter( movie => {
            let lowerCaseMovieName = movie.name.toLowerCase();
            return lowerCaseMovieName.indexOf(movieName) !== -1;
        })
        return movies;
    }

    searchMoviesByDirectorName = (movies, directorName) => {
        movies = movies.filter( movie => {
            let lowerCaseDirectorSurname = movie.director.surname.toLowerCase();
            return lowerCaseDirectorSurname.indexOf(directorName) !== -1;
        })
        return movies;
    }

    isTableAttributeClicked = () => {
        return this.props.active !== "";
    }

    sortMoviesByMovieLength = (movies) => {
        if(this.props.direction === "asc") {
            movies.sort((a, b) => {
                return a.length - b.length
            })
            return movies;
        }
        else {
            movies.sort((a, b) => {
                return b.length - a.length
            })
            return movies;
        }
    }

    sortMoviesByMovieYear = (movies) => {
        if(this.props.direction === "asc") {
            movies.sort((a, b) => {
                return a.year- b.year
            })
            return movies;
        }
        else {
            movies.sort((a, b) => {
                return b.year - a.year
            })
            return movies;
        }
    }
}

//retrieve movies data from the redux store
const mapStateToProps = state => {
    return {
        mv: state.movie.movies,
        count: state.movie.count,
        search: state.movie.search,
        searchType: state.movie.selected,
        active: state.movie.sort.active,
        direction: state.movie.sort.direction
    
    }
};

// functions that operate on movies
const mapDispatchToProps = dispatch => {
    return {

        initMovies: () => dispatch(actions.getMovies()),
        deleteMovie: (id, index) => dispatch(actions.deleteMovie(id, index)),
        setSort: (active) => dispatch(actions.setSort(active))
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieViewer);