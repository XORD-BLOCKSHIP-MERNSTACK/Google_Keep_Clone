import React, { useState, useContext } from 'react';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const Note = (props) => {
  const { id, title, note, pin, archiev } = props;
  const [pinStatus, setpinStatus] = useState(pin);
  const [aarchieve, setAarchieve] = useState(archiev);
  const { archieve, unArchieve, pinned, unPinned, deleteNote } =
    useContext(NoteActionContext);

  const handleArchieve = () => {
    setAarchieve(!aarchieve);
    !aarchieve ? archieve(id) : unArchieve(id);
  };

  const handlePin = () => {
    setpinStatus(!pinStatus);
    !pinStatus ? pinned(id) : unPinned(id);
  };

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div id='note' className='col-lg-3 col-md-6 col-sm-12'>
      <h4>{title}</h4>
      <p>{note}</p>
      <button onClick={handlePin}>{pinStatus ? 'p' : 'u'}</button>
      <button onClick={handleDelete}>d</button>
      <button onClick={handleArchieve}>{aarchieve ? 'NA' : 'A'}</button>
      <button>E</button>
    </div>
  );
};

export default Note;
