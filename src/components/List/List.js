import React from 'react';

// Custom Components
import Note from '../Note/Note';

const List = (props) => {
  const { notesList } = props;

  return (
    <div className='row'>
      {notesList.map((data, index) => (
        <Note
          key={index}
          title={data.title}
          note={data.note}
          pin={data.pin}
          id={data.id}
          archieve={data.archieve}
        />
      ))}
    </div>
  );
};

export default List;
