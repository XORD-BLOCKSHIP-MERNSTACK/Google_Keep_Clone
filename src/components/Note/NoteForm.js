import React, { useContext, useState } from 'react';

// Unique uid generator
import { v4 as uuidv4 } from 'uuid';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const NoteForm = () => {
  const { addNote } = useContext(NoteActionContext);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState(false);

  const Submit = () => {
    let id = uuidv4();
    let obj = {
      id: id,
      title: title,
      note: note,
      pin: pin,
    };
    addNote(obj);
    setNote('');
    setTitle('');
    setPin(false);
  };

  return (
    <div className='note-form'>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder='Take a note'
      />
      <div>
        <h6>Temp inputs</h6>
      </div>
      <button onClick={Submit}>Submit</button>
      <button onClick={() => setPin(!pin)}>p</button>
      <button>A</button>
    </div>
  );
};

export default NoteForm;
