// ** React Imports
import React, { useState, ChangeEvent, Fragment } from 'react';

// ** MUI Imports
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

// ** Icons Imports (Assuming you have these icons imported)
import ChevronUp from 'mdi-material-ui/ChevronUp';
import ChevronDown from 'mdi-material-ui/ChevronDown';

interface Column {
  id: 'date' | 'heure' | 'combien' | 'espace' | 'comment' | 'Status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface Data {
  date: string;
  heure: string;
  espace: string;
  comment: string;
  combien: number;
  Status?: React.ReactNode;
  additionalInfo: string;
  nom: string;
  prenom: string;
  numberphone: number;
}

function createData(
  date: string,
  heure: string,
  combien: number,
  espace: string,
  comment: string,
  nom: string,
  prenom: string,
  numberphone: number,
): Data {
  const Comment = combien / parseFloat(espace);

  return { date, heure, combien, espace, comment, Status: null, additionalInfo: 'Additional info...', nom, prenom, numberphone };
}

const columns: readonly Column[] = [
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'heure', label: 'Heure', minWidth: 50 },
  {
    id: 'combien',
    label: 'Combien de personnes',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'espace',
    label: 'Espace',
    minWidth: 60,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'comment',
    label: 'Comment',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  { id: 'Status', label: 'Status', minWidth: 170 },
];

const rows: Data[] = [
  createData('02-01-2024', '12:15', 2, 'intérieurrrr', 'hhggggg', 'John', 'Doe', 333),
  createData('02-01-2024', '12:15', 2, 'extérieure', 'hh', 'Jane', 'Doe', 27458745),
  // ... (existing rows remain the same)
];

const Row = (props: { row: Data }) => {
  const { row } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleAccept = (row: Data) => {
    console.log(`Accepted: ${row.date}`);
  };

  const handleRefuse = (row: Data) => {
    console.log(`Refused: ${row.date}`);
  };

  return (
    <Fragment>
      <TableRow hover role='checkbox' tabIndex={-1} key={row.heure} onClick={() => setOpen(!open)}>
        {columns.map((column) => (
          <TableCell key={column.id} align={column.align}>
            {column.id === 'Status' ? (
              <div>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleAccept(row)}
                  sx={{
                    backgroundColor: 'rgb(255, 186, 59)',
                    '&:hover': {
                      backgroundColor: 'white',
                      border: '1px solid rgb(255, 186, 59)',
                      color: 'grey',
                    },
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleRefuse(row)}
                  sx={{
                    backgroundColor: 'rgb(136, 78, 211)',
                    marginRight: '4px',
                    '&:hover': {
                      backgroundColor: 'white',
                      border: '1px solid rgb(136, 78, 211)',
                      color: 'grey',
                    },
                  }}
                >
                  Refuse
                </Button>
              </div>
            ) : column.id === 'comment' ? (
              <span>{row.comment}</span>
            ) : column.id === 'date' ? (
              <span onClick={() => setOpen(!open)}>{row.date}</span>
            ) : column.id === 'heure' ? (
              <span onClick={() => setOpen(!open)}>{row.heure}</span>
            ) : (
              row[column.id]
            )}
          </TableCell>
        ))}
      </TableRow>

      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Les informations du client
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell   sx={{
                    fontWeight: 'bold'}}>Nom:</TableCell>
                    <TableCell>{row.nom}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 'bold'}}>Prénom:</TableCell>
                    <TableCell>{row.prenom}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 'bold'}}>Numéro de téléphone:</TableCell>
                    <TableCell>{row.numberphone}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

const TableStickyHeader = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row key={row.heure} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableStickyHeader;
