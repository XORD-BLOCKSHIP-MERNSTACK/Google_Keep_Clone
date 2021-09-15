import React, { useContext } from 'react';

// Custom Components
import Note from '../components/Note/Note';

// Context
import { NoteContext } from '../context/NoteContext';

const Archieve = () => {
  const { notes } = useContext(NoteContext);

  const archivedNotes = notes.filter((note) => note.archieve === true);
  return (
    <div className='container'>
      {notes ? (
        <div>
          <h2>Archieve Notes</h2>
          <div className='notes-list'>
            <div className='row'>
              {archivedNotes.map((data, index) => (
                <Note
                  key={index}
                  title={data.title}
                  note={data.note}
                  pin={data.pin}
                  id={data.id}
                  archiev={data.archieve}
                  bgcolor={data.bgcolor}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No Archieved Notes Yet</p>
      )}
    </div>
  );
};

export default Archieve;
