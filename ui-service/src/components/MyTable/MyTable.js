import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const myTable = (props) => {
    return (
        <Paper square="true"> 
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Badge style={{marginLeft:"24px"}} badgeContent={props.count} color="primary">
                  <div></div>
                </Badge>
              </TableCell>
              <TableCell align="justify">Name</TableCell>
              <TableCell align="justify">
                <TableSortLabel onClick={() => props.sort("length")} active={props.active === "length"} direction={props.direction}>
                  Length&nbsp;(minutes)
                </TableSortLabel>
              </TableCell>
              <TableCell align="justify">
                <TableSortLabel onClick={() => props.sort("year")} active={props.active === "year"} direction={props.direction}>
                  Year
                </TableSortLabel>
              </TableCell>
              <TableCell align="justify">Director&nbsp;(name)</TableCell>
              <TableCell align="justify">Director&nbsp;(surname)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {props.data.map( (d, index) => (
              <TableRow key={d.id}>
                <TableCell align="left">
                    <IconButton onClick={ () => props.deleteMovie(d.id, index)} color="primary">
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="justify">
                  {d.name}
                </TableCell>
                <TableCell align="justify">{d.length}</TableCell>
                <TableCell align="justify">{d.year}</TableCell>
                <TableCell align="justify">{d.director.name}</TableCell>
                <TableCell align="justify">{d.director.surname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Paper>
    );
}

export default myTable;