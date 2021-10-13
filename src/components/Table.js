import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import TableHeader from './TableHeader';
import TableBody  from './TableBody';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable(props) {
  const dataBook = props.dataBook;
  const classes = useStyles();    
  return (
    
    <div className='table'>
    <TableContainer component={Paper}>      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHeader />
        <TableBody props= {dataBook} />
        </Table>
    </TableContainer>
    </div>
  );
}
