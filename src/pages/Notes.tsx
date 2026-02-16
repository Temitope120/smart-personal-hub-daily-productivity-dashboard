import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper';
import EmptyState from '../assets/empty-table.svg'

function createData(
  index: number,
  title: string,
  content: number,
  action: number,
) {
  return { index, title, content, action };
}

const rows = [
  createData(1, 'standup Meeting Project Update to discuss the way forward on Sprint 2', 159, 6.0,),
  createData(2, 'Meeting with Client at 2pm', 237, 9.0,),
  createData(3, 'Meeting with Client at 2pm', 262, 16.0,),
  createData(4, 'Meeting with Client at 2pm', 305, 3.7,),

];

const Notes = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <>

      <div className="bg-white flex items-center justify-between pt-8 md:px-4 md:py-6 xl:p-6">
        <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
          Notes
        </h2>
        <button className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-semibold'>
          Add New Note
        </button>
      </div>

      <TableContainer component={Paper} className='mt-10'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">S/N</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) ? rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.index}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.content}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                </TableRow>
              )) :
              <img src={EmptyState} alt="empty-table-icon" />
            }
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>

      {/* pagination */}

    </>
  )
}

export default Notes
