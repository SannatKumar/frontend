import {TableHead, TableRow, TableCell} from '@material-ui/core';

// This is  a table header using material ui and exported as default
const TableHeader = () => {
    return(
        <>
        <TableHead style={{width: "100%", height:"100px", background:"green"}}>
            <TableRow>
                <TableCell align='center'>EventType</TableCell>
                <TableCell align='right'>Folder</TableCell>
                <TableCell align='right'>Filter</TableCell>
                <TableCell align='right'>Actions</TableCell>
                <TableCell align='right'>Properties</TableCell>
                <TableCell align='right'>Query</TableCell>
                <TableCell >Edit</TableCell>
                <TableCell >Delete</TableCell>
            </TableRow>
        </TableHead>
        </>
    );
}

export default TableHeader;