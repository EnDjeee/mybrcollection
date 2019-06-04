import React, { Component } from 'react';
import * as actions from '../../store/actions/movie';
import { connect } from 'react-redux';
import MyTable from '../../components/MyTable/MyTable';


class MovieViewer extends Component {

    componentDidMount() {
        this.props.initMovies();
    }

    
    render (){

        let data = this.props.mv;
        /*let movies = data.map( m => {
            return <li key={m.id}>{m.name}</li>
        })*/
        let count = this.props.count;
        if(this.props.search != "") {
            let lowerCaseSearch = this.props.search.toLowerCase();
            if(this.props.searchType === "movie") {
                data = data.filter( movie => {
                    let lowerCaseMovieName = movie.name.toLowerCase();
                    return lowerCaseMovieName.indexOf(lowerCaseSearch) !== -1;
                })
            }
            else {
                data = data.filter( movie => {
                    let lowerCaseDirectorSurname = movie.director.surname.toLowerCase();
                    return lowerCaseDirectorSurname.indexOf(lowerCaseSearch) !== -1;
                })
                count = data.length
            }
        }
        if(this.props.active !== "") {
            if(this.props.active === "length"){
                if(this.props.direction === "asc") {
                    data.sort((a, b) => {
                        return a.length - b.length
                    })
                }
                else {
                    data.sort((a, b) => {
                        return b.length - a.length
                    })
                }
            }
            else {
                if(this.props.direction === "asc") {
                    data.sort((a, b) => {
                        return a.year- b.year
                    })
                }
                else {
                    data.sort((a, b) => {
                        return b.year - a.year
                    })
                }
            }
        }
        return (
            <div>
                <MyTable sort={this.props.setSort} active={this.props.active} direction={this.props.direction} data={data} deleteMovie={this.props.deleteMovie} count={count}/>
            </div>
        );
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