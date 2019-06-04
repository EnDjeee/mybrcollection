import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import NewMovieForm from '../NewMovieForm/NewMovieForm';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/movie';



  

class MyToolbar extends Component {

    state={
      showForm: false
    }

    onButtonClick = () => {
      this.setState(prevState => ({
          showForm: !prevState.showForm
      }));
  }


    render() {
      return (
        
          <AppBar position="static" color="primary">
              <Toolbar style={{justifyContent: "center"}}>
                  <Select style={{ backgroundColor: "#ffca28", padding: "4px", borderColor:"white", borderRadius: "15px 0px 0px 15px", borderLeftWidth: "2px", borderBottomWidth: "2px", borderTopWidth: "2px", borderRightWidth: "1px", borderStyle: "solid"}} disableUnderline value={this.props.searchType} variant="outlined" onChange={event => this.props.changeTypeSearch(event.target.value)}>
                      <MenuItem value="movie">Movie</MenuItem>
                      <MenuItem value="director">Director</MenuItem>
                  </Select>
                  <Input onChange={(e) => this.props.setSearch(e.target.value)} style={{paddingLeft: "4px", color:"white", fontSize: 23, borderLeftWidth: "0px", borderTopWidth: "2px", borderBottomWidth: "2px", borderRightWidth: "0px", borderStyle: "solid"}} type="search" disableUnderline placeholder={this.props.placeholder} />
                  <div style={{borderRadius: "0px 15px 15px 0px", borderLeftWidth: "0px", borderTopWidth: "2px", borderBottomWidth: "2px", borderRightWidth: "2px", borderStyle: "solid"}}>
                  <IconButton style={{paddingTop:"2px"}} size="small" color="inherit"> 
                    <SearchIcon fontSize="large" />
                  </IconButton>
                  </div>
                  <div style={{marginLeft: "auto"}}>
                  <Button onClick={this.onButtonClick} style={{borderWidth: "2px", borderColor: "white", borderStyle: "solid"}} variant="contained" color="secondary" size="medium">
                    ADD MOVIE 
                    &nbsp;
                    <AddIcon/>
                  </Button>
                  </div>
                  <NewMovieForm add={this.props.addMovie} show={this.state.showForm} close={this.onButtonClick}/>
              </Toolbar>
          </AppBar>

      );
    }
}

const mapStateToProps = state => {
  return {
    searchType: state.movie.selected,
    placeholder: state.movie.placeholder
  
  }
};


const mapDispatchToProps = dispatch => {
  return {
      addMovie: (movie) => dispatch(actions.addMovie(movie)),
      changeTypeSearch: (type) => dispatch(actions.changeTypeSearch(type)),
      setSearch: (word) => dispatch(actions.setSearch(word))
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyToolbar);