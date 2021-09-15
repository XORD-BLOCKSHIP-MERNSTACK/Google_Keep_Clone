import React from 'react';

// Custom Components
import Note from '../Note/Note';

const List = (props) => {
  const { notesList, list } = props;

  return (
    <div className='row'>
      {notesList.map((data, index) => (
        <Note
          key={index}
          title={data.title}
          note={data.note}
          pin={data.pin}
          id={data.id}
          archiev={data.archieve}
          listname={list}
          bgcolor={data.bgcolor}
        />
      ))}
    </div>
  );
};

export default List;
