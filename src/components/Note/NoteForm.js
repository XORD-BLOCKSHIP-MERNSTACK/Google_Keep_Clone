import React, { useContext, useState } from 'react';

// Icons
import { RiPushpin2Fill, RiPushpin2Line } from 'react-icons/ri';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

// Unique uid generator
import { v4 as uuidv4 } from 'uuid';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const NoteForm = () => {
  const { addNote } = useContext(NoteActionContext);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState(false);
  const [archive, setArchive] = useState(false);

  const Submit = () => {
    let id = uuidv4();
    let obj = {
      id: id,
      title: title,
      note: note,
      pin: pin,
      archieve: archive,
    };
    addNote(obj);
    setNote('');
    setTitle('');
    setPin(false);
    setArchive(false);
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
      <div className='icons-container'>
        <div onClick={() => setPin(!pin)}>
          {pin ? (
            <RiPushpin2Fill className='note-icon' />
          ) : (
            <RiPushpin2Line className='note-icon' />
          )}
        </div>

        <div onClick={() => setArchive(!archive)}>
          {archive ? (
            <BiArchiveOut className='note-icon' />
          ) : (
            <BiArchiveIn className='note-icon' />
          )}
        </div>
      </div>
      <button onClick={Submit}>Submit</button>
    </div>
  );
};

export default NoteForm;
