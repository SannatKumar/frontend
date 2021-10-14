import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
//import Button from '@material-ui/core/Button'; 
import useDataEvent from '../custom_hooks/useDataEvent';

export default function TableBody() {
    const {dataEvent} = useDataEvent();
    return(
        <>
        {dataEvent.filter((singleEvent) => {
            return singleEvent;
        }).map((item)=> (
            <TableRow key= {item.id} style={{background:"#FDFAAB"}}>
                <TableCell component="th" scope="row">
                    {item.monitorEvent}
                </TableCell>
                <TableCell align="right">{item.folder}</TableCell>
                <TableCell align="right">{item.filter}</TableCell>                
                <TableCell align="right">{item.action}</TableCell>
                <TableCell align="right">{item.property}</TableCell>
                <TableCell align="right">{item.query}</TableCell>
                <TableCell >
                    <button id = "redButtons" className= "edit-buttons" variant="contained" color="secondary">Delete
                    </button>
                </TableCell>
                <TableCell >
                    <button id = "blueButtons" className= "edit-buttons" variant="contained" color="primary">Edit
                    </button>
                </TableCell>
            </TableRow>
        ))}
        </>
    )
}