import React from 'react';

// Custom Components
import List from '../components/List/List';

const Bin = (props) => {
  const { deletedNotes } = props;
  return (
    <div>
      <h1>Deleted Notes</h1>
      <div>
        <List notesList={deletedNotes} />
      </div>
    </div>
  );
};

export default Bin;
