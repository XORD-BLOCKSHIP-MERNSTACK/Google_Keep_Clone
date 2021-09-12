import React, { useState, useContext } from 'react';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const Note = (props) => {
  const { id, title, note, pin, archiev } = props;
  const [pinStatus, setpinStatus] = useState(pin);
  const [aarchieve, setAarchieve] = useState(archiev);
  const { handlePin, handleArchive, deleteNote } =
    useContext(NoteActionContext);

  const Archieve = () => {
    handleArchive(id);
  };

  const Pin = () => {
    handlePin(id);
  };

  const Delete = () => {
    deleteNote(id);
  };

  return (
    <div id='note' className='col-lg-3 col-md-6 col-sm-12'>
      <h4>{title}</h4>
      <p>{note}</p>
      <button onClick={Pin}>{pinStatus ? 'p' : 'u'}</button>
      <button onClick={Delete}>d</button>
      <button onClick={Archieve}>{aarchieve ? 'NA' : 'A'}</button>
      <button>E</button>
    </div>
  );
};

export default Note;
