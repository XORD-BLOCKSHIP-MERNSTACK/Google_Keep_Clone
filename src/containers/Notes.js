import React, { useContext } from 'react';

// Custom Components
import List from '../components/List/List';
import NoteForm from '../components/Note/NoteForm';

// Context
import { NoteContext } from '../context/NoteContext';

const Notes = () => {
  const { notes } = useContext(NoteContext);

  const pinnedNotes = notes.filter((note) => note.pin === true);
  const others = notes.filter((note) => note.pin === false);

  return (
    <div className='container'>
      <div className='note-form-con'>
        <NoteForm />
      </div>

      {pinnedNotes ? (
        <div style={{ padding: '20px 0px' }}>
          <h2>Pinned</h2>
          <div className='notes-list'>
            <List notesList={pinnedNotes} />
          </div>
        </div>
      ) : (
        <></>
      )}
      {others ? (
        <div style={{ padding: '20px 0px' }}>
          <h2>Others</h2>
          <div>
            <List notesList={others} />
          </div>
        </div>
      ) : (
        <h1>No Notes</h1>
      )}
    </div>
  );
};

export default Notes;
