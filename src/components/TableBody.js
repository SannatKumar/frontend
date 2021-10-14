import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'; 
import useBookEvent from '../custom_hooks/useBookEvent';

export default function TableBody() {
    const {dataBook} = useBookEvent();
    return(
        <>
        {dataBook.filter((singleBook) => {
            return singleBook;
        }).map((item)=> (
            <TableRow key= {item.id} style={{background:"#FDFAAB"}}>
                <TableCell component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.author}</TableCell>                
                <TableCell align="right">{item.publicationYear}</TableCell>
                <TableCell align="right">{item.IsAvailable}</TableCell>
                <TableCell align="right">{item.callingNumber}</TableCell>
                <TableCell >
                    <Button variant="contained" color="secondary">Delete
                    </Button>
                </TableCell>
                <TableCell >
                    <Button variant="contained" color="primary">Edit
                    </Button>
                </TableCell>
            </TableRow>
        ))}
        </>
    )
}