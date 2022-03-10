import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
    tableHeads: string[];
    dataKeys: string[];
    data: any[];
};

export default function BasicTable(props: Props) {

    const {tableHeads, dataKeys, data} = props; 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                tableHeads.map((tableHead, index) => <TableCell key={index.toString()}>{ tableHead }</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>      
            {
                data.map((rows:any, index) => 
                      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >     
                        {
                            dataKeys.map((key)=> <TableCell>
                                {rows[key]}
                            </TableCell>)
                        }
                    </TableRow>

                )
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
