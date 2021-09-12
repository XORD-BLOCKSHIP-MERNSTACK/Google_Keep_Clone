import React from 'react';

// Custom Components
import List from '../components/List/List';

const Bin = (props) => {
  const { deletedNotes } = props;
  return (
    <div className='container'>
      <h2>Deleted Notes</h2>
      <div className='notes-list'>
        <div>
          <List notesList={deletedNotes} />
        </div>
      </div>
    </div>
  );
};

export default Bin;
