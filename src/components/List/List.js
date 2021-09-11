import React from 'react';

// Custom Components
import Note from '../Note/Note';

const List = (props) => {
  const { notesList } = props;
  console.log(' notes list', notesList);
  return (
    <div>
      {notesList.map((data) => (
        <Note
          key={data.id}
          title={data.title}
          note={data.note}
          pin={data.pin}
        />
      ))}
    </div>
  );
};

export default List;
