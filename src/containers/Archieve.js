import React from 'react';

// Custom Components
import List from '../components/List/List';

const Archieve = (props) => {
  const { archievedNotes } = props;
  return (
    <div className='container'>
      <h2>Archieve Notes</h2>
      <div className='notes-list'>
        <List notesList={archievedNotes} />
      </div>
    </div>
  );
};

export default Archieve;
