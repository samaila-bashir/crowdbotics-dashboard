import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ViewIcon from '@mui/icons-material/Visibility';
import Spinner from '../../components/spinner/Spinner';

interface Props {
    tableHeads: string[];
    dataKeys: string[];
    data: any[];
    onView?: (data: any) => void;
    onDelete?: (data: any) => void;
    onEdit?: (data: any) => void;
    deleteStatus?: boolean;
};

export default function BasicTable(props: Props) {

    const [deleteId, setDeleteId] = useState("");

    const {tableHeads, dataKeys, data, onView, onDelete, onEdit, deleteStatus} = props; 

    const handleDelete = (row:any) => {
      if (onDelete) {
        onDelete(row); 
        setDeleteId(row.id);
      }
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                tableHeads.map((tableHead, index) => <TableCell key={index.toString()}>{ tableHead }</TableCell>)
            }
            <TableCell style={{ textAlign: "center" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>      
            {
                data.map((rows:any, index) => 
                      <TableRow key={index.toString()} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >     
                        {
                            dataKeys.map((key, index) => <TableCell key={index.toString()}>
                                {rows[key]}
                            </TableCell>)
                        }

                        <TableCell>
                          <IconButton onClick={() => onView && onView(rows)}>
                            <ViewIcon />
                          </IconButton>

                          <IconButton onClick={() => onEdit && onEdit(rows)}>
                            <EditIcon />
                          </IconButton>

                          <IconButton onClick={() => handleDelete(rows)}>
                              { 
                                deleteStatus && deleteId === rows.id ? <Spinner color="inherit" size={25} /> :  <DeleteIcon /> }
                          </IconButton>
                        </TableCell>
                    </TableRow>

                )
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
