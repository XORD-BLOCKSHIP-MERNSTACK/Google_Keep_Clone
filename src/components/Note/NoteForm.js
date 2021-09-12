import React from 'react';

const NoteForm = () => {
  return (
    <div className='note-form'>
      <form>
        <input placeholder='Title' />
        <textarea placeholder='Take a note' />
        <div>
          <h6>Temp inputs</h6>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
