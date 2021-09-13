import React, { useContext } from 'react';

// Custom Components
import Note from '../components/Note/Note';

// Context
import { NoteContext } from '../context/NoteContext';

const SearchList = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className='container'>
      {notes ? (
        <div className='notes-list'>
          <div className='row'>
            {notes.map((data, index) => (
              <Note
                key={index}
                title={data.title}
                note={data.note}
                pin={data.pin}
                id={data.id}
                archiev={data.archieve}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No Archieved Notes Yet</p>
      )}
    </div>
  );
};

export default SearchList;
