import React, { useState } from 'react';

const Note = (props) => {
  const { title, note, pin } = props;
  const [pinStatus, setpinStatus] = useState(pin);
  return (
    <div id='note' className='col-lg-3 col-md-6 col-sm-12'>
      <h4>{title}</h4>
      <p>{note}</p>
      <button onClick={() => setpinStatus(!pinStatus)}>
        {pinStatus ? 'p' : 'u'}
      </button>
      <button>d</button>
      <button>A</button>
      <button>E</button>
    </div>
  );
};

export default Note;
