import {TableHead, TableRow, TableCell} from '@material-ui/core';

// This is  a table header using material ui and exported as default
const TableHeader = () => {
    return(
        <>
        <TableHead style={{width: "100%", height:"100px", background:"green"}}>
            <TableRow>
                <TableCell align='center'>Id</TableCell>
                <TableCell align='right'>Title</TableCell>
                <TableCell align='right'>Author</TableCell>
                <TableCell align='right'>Publication Year</TableCell>
                <TableCell align='right'>Is Availbale</TableCell>
                <TableCell align='right'>Calling Number</TableCell>
                <TableCell lign="right">Edit</TableCell>
                <TableCell lign="right">Delete</TableCell>
            </TableRow>
        </TableHead>
        </>
    );
}

export default TableHeader;