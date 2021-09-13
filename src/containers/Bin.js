import React, { useContext } from 'react';

// Custom Components
import List from '../components/List/List';

// Context
import { NoteContext } from '../context/NoteContext';

const Bin = () => {
  const { deletedNotes } = useContext(NoteContext);
  return (
    <div className='container'>
      <h2>Deleted Notes</h2>
      <div className='notes-list'>
        <div>
          <List notesList={deletedNotes} list='delete' />
        </div>
      </div>
    </div>
  );
};

export default Bin;
