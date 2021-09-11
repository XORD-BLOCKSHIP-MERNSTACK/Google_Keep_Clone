import React from 'react';

// Custom Components
import List from '../components/List/List';

const Notes = (props) => {
  const { notes } = props;

  const pinnedNotes = notes.filter((note) => note.pin === true);
  const others = notes.filter((note) => note.pin === false);

  return (
    <div>
      {pinnedNotes ? (
        <div>
          <h1>Pinned</h1>
          <div>
            <List notesList={pinnedNotes} />
          </div>
        </div>
      ) : (
        <></>
      )}
      {others ? (
        <div>
          <h1>Others</h1>
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
