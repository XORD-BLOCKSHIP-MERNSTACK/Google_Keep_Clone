import React, { useState } from 'react';

const Note = (props) => {
  const { title, note, pin } = props;
  const [pinStatus, setpinStatus] = useState(pin);
  return (
    <div>
      <h1>{title}</h1>
      <p>{note}</p>
      <button onClick={() => setpinStatus(!pinStatus)}>
        {pinStatus ? 'pinned' : 'unpinned'}
      </button>
      <button>delete</button>
      <button>Archieve</button>
      <button>Edit</button>
    </div>
  );
};

export default Note;
