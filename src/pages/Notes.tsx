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
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import type { Note } from "../types/notes";
import { toTitleCase } from "../utils/formatters"
import CustomModal from "../components/customModal";

function createData(
  index: number,
  title: string,
  content: string,
  action: null,
) {
  return { index, title, content, action };
}

const rows = [
  createData(1, 'standup Meeting Project Update to discuss the way forward on Sprint 2', 'Oyo is a state in Nigeria', null),
  createData(2, 'Note 2', 'Oyo is a state in Nigeria', null),
  createData(3, 'Note 3', 'Oyo is a state in Nigeria', null),
  createData(4, 'Note 4', 'Oyo is a state in Nigeria', null),
  createData(5, 'Note 5', 'Oyo is a state in Nigeria', null),
  createData(6, 'Note 6', 'Oyo is a state in Nigeria', null),
  createData(7, 'Note 7', 'Oyo is a state in Nigeria', null),

];

const Notes = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [notes, setNotes] = React.useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : rows;
  });

  const [noteTitle, setNoteTitle] = React.useState('');
  const [noteContent, setNoteContent] = React.useState('');
  const [newNoteTitle, setnewNoteTitle] = React.useState('');
  const [newNoteContent, setNewNoteContent] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [openNewNoteModal, setOpenNewNoteModal] = React.useState(false);
  const [newNoteError, setNewNoteError] = React.useState("");
  const [newContentError, setNewContentError] = React.useState("");
  const [error, setError] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  // const createNote = (title: string, content: string) => {
  //   const newNote: Note = {
  //     index: Date.now(),
  //     title:,
  //     content: string,
  //     action: null,

  //   }

  //   setTasks((prev) => {
  //     const updated = [...prev, newTask];
  //     console.log(updated, "updated tasks");
  //     return updated;
  //   });
  //   setTaskName("");

  // }

  const formErrorCheck = () => {
    const trimmedNote = noteTitle.trim();
    const trimmedContent = noteContent.trim();


    let hasError = false;
    if (trimmedNote.length < 3) {
      setError("Note field must be at least 3 characters");
      hasError = true;
    } else {
      setError("");

    }

    console.log(hasError, trimmedNote.length, 'does note have error')



    if (trimmedContent.length < 3) {
      setError("Content field must be at least 3 characters");
      hasError = true;
    } else {
      setError("");
    }
    console.log(hasError, trimmedContent.length, 'does content have error')
    if (hasError) return null;

    return {
      trimmedNote,
      trimmedContent,

    }
  }


  const createNote = (title: string, content: string) => {
    const newNote: Note = {
      index: Date.now(),
      title: title,
      content: content,
      action: null,
    }
// issue of array wrapped in object here
    setNotes((prev: any) => {
      console.log(prev, 'wha is prev')
      const updated = [...prev, newNote];
      console.log(updated, "updated Note");
      return updated;
    });
    setNoteTitle("");
    setNoteContent("");

  }




  const handleCreateAction = () => {
    const formData = formErrorCheck();

    if (!formData) return;
    createNote(formData.trimmedNote, formData.trimmedContent);
    setNoteTitle("");
    setNoteContent("");

    setOpenNewNoteModal(false);

  }

  const handleCreate = () => {
    setOpenNewNoteModal(true);
    setNoteTitle("");
    setNoteContent("");


  };


  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
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


  const handleEdit = (note: Note, noteIndex: any) => {
    setSelectedIndex(noteIndex);
    console.log(noteIndex, "selectednote  index");

    setNoteTitle(notes[noteIndex].title);
    setNoteContent(notes[noteIndex].content);
    setOpen(true);
  };


  const handleDelete = (id: number) => {
    const filteredNotes = notes.filter((note: Note) => note.index !== id);
    setNotes(filteredNotes);
  }


  const editNote = (title: string, content: string, index: number) => {
    setNotes((prev: Note[]) => {
      prev.map((note: Note, i: number) =>
        i === index ? { ...note, title, content } : note
      )

    });
  }




  const handleEditAction = () => {
    const formData = formErrorCheck();
    if (!formData) return;

    if (selectedIndex !== null) {
      editNote(formData.trimmedNote, formData.trimmedContent, selectedIndex);
    }

    setNoteTitle("");
    setNoteContent("");
    setOpen(false);

  };


  const handleClose = () => {
    setOpen(false);
  };

  const closeNewNoteModal = () => {
    setOpenNewNoteModal(false);
  };



  return (
    <>

      <div className="bg-white flex items-center justify-between pt-8 md:px-4 md:py-6 xl:p-6">
        <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
          Notes
        </h2>
        <button
          onClick={handleCreate}
          className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-semibold'>
          Add New Note
        </button>
      </div>

      <TableContainer component={Paper} className='mt-10'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">S/N</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="left">Content</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes && notes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?
              notes.map((note: Note, i: number = 0) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{i + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {toTitleCase(note.title)}
                  </TableCell>
                  <TableCell align="left">{toTitleCase(note.content)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleEdit(note, i)}>
                        <MdOutlineEdit />

                      </button>

                      <button onClick={() => handleDelete(note.index)}>
                        <MdDeleteOutline />
                      </button>
                    </div>


                  </TableCell>
                </TableRow>
              )) :
              <>
                <p> Got here</p>
                <img src={EmptyState} alt="empty-table-icon" />
              </>

            }
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={notes.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>

      {/* pagination */}



      {/* notes modal */}
      <Dialog open={open} onClose={handleClose} disableRestoreFocus>
        <DialogTitle>Edit Note</DialogTitle>

        <DialogContent className="">
          <TextField
            fullWidth
            value={noteTitle}
            onChange={(e) => {
              setNoteTitle(e.target.value)
              if (error) setError("");
            }}
            label="Note Title"
            error={!!error}
            helperText={error}

          />

        </DialogContent>


        <DialogContent>
          <TextField
            fullWidth
            value={noteContent}
            onChange={(e) => {
              setNoteContent(e.target.value)
              if (error) setError("");
            }}
            label="Note Content"
            error={!!error}
            helperText={error}

          />

        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className='bg-gray-100 text-dark flex gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Cancel
          </button>
          <button
            onClick={handleEditAction}
            className='bg-[#F5F5F5] text-[#1B6747] flex items-center gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Edit
          </button>
        </DialogActions>
      </Dialog>



      {/* create note modal */}
      {/* notes modal */}
      <Dialog open={openNewNoteModal} onClose={closeNewNoteModal} disableRestoreFocus>
        <DialogTitle>Create Note</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            value={noteTitle}
            onChange={(e) => {
              setNoteTitle(e.target.value)
              if (newNoteError) setNewNoteError("");
            }}
            label="Note Title"
            error={!!newNoteError}
            helperText={newNoteError}

          />

        </DialogContent>


        <DialogContent>
          <TextField
            fullWidth
            value={noteContent}
            onChange={(e) => {
              setNoteContent(e.target.value)
              if (newContentError) setNewContentError("");
            }}
            label="Note Content"
            error={!!newContentError}
            helperText={newContentError}

          />

        </DialogContent>
        <DialogActions>
          <button
            onClick={closeNewNoteModal}
            className='bg-gray-100 text-dark flex gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Cancel
          </button>
          <button
            onClick={handleCreateAction}
            className='bg-[#F5F5F5] text-[#1B6747] flex items-center gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
            Create
          </button>
        </DialogActions>
      </Dialog>



    </>
  )
}

export default Notes
