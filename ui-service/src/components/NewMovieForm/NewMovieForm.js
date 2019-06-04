import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownCircleTwoTone from '@material-ui/icons/ArrowDropDownCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Cancel from '@material-ui/icons/Cancel';
import List from '@material-ui/core/List';


class NewMovieForm extends Component {

    state= {
        name: "",
        year: "",
        length: "",
        dname: "",
        dsurname: ""
    }

    handleChange = (name, e) => {
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleForm = (e) => {
        e.preventDefault();
        let newMovie = {
            id: "",
            name: this.state.name,
            year: this.state.year,
            length: this.state.length,
            director: {
                id: "",
                name: this.state.dname,
                surname: this.state.dsurname
            }
        }
        this.props.close();
        this.props.add(newMovie);
    }


    render () {
        return (
            <Dialog scroll="body" maxWidth="xs" open={this.props.show} onClose={this.props.close}>
            <DialogTitle>Add a new movie</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please fill this form.</DialogContentText>
                    <form onSubmit={this.handleForm} encType="multipart/form-data">
                        <TextField
                        required
                        label="Name"
                        margin="normal"
                        name='name'
                        onChange={(e) => this.handleChange('name', e)}
                        />
                        <br/>
                        <TextField
                        required
                        label="Year"
                        margin="normal"
                        name='year'
                        onChange={(e) => this.handleChange('year', e)}
                        />
                        <br/>
                        <TextField
                        required
                        label="Length"
                        margin="normal"
                        name='length'
                        onChange={(e) => this.handleChange('length', e)}
                        />
                        <br/>
                        <TextField
                        required
                        label="Director's name"
                        margin="normal"
                        name='dname'
                        onChange={(e) => this.handleChange('dname', e)}
                        />
                        <br/>
                        <TextField
                        required
                        label="Director's surname"
                        margin="normal"
                        name='dsurname'
                        onChange={(e) => this.handleChange('dsurname', e)}
                        />
                        <br/>
                        <br/>
                        <DialogActions>
                            <Button onClick={this.props.close} color="primary" variant="contained" >Cancel</Button>
                            <Button type="submit" color="primary" variant="contained" >Add</Button>
                        </DialogActions>
                        </form>
                </DialogContent>
        </Dialog>

        );  
    }
}

export default NewMovieForm;