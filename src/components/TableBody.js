import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useBookEvent from '../custom_hooks/useBookEvent';




export default function TableBody(props) {
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
            </TableRow>
        ))}
        </>
    )
}