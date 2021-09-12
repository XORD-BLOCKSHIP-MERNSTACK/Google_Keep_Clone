import React, { useContext } from 'react';

// Custom Components
import List from '../components/List/List';

// Context
import { NoteContext } from '../context/NoteContext';

const Archieve = () => {
  const { archievedNotes } = useContext(NoteContext);
  return (
    <div className='container'>
      {archievedNotes ? (
        <div>
          <h2>Archieve Notes</h2>
          <div className='notes-list'>
            <List notesList={archievedNotes} />
          </div>
        </div>
      ) : (
        <p>No Archieved Notes Yet</p>
      )}
    </div>
  );
};

export default Archieve;
