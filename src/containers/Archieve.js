import React from 'react';

// Custom Components
import List from '../components/List/List';

const Archieve = (props) => {
  const [archievedNotes] = props;
  return (
    <div>
      <h1>Archieve Notes</h1>
      <div>
        <List notesList={archievedNotes} />
      </div>
    </div>
  );
};

export default Archieve;
