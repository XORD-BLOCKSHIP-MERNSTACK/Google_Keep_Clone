import React, { useContext } from 'react';

// Icons
import {
  RiPushpin2Fill,
  RiDeleteBin5Fill,
  RiPushpin2Line,
} from 'react-icons/ri';
import { BiArchiveIn, BiArchiveOut, BiEdit } from 'react-icons/bi';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const Note = (props) => {
  const { id, title, note, pin, archiev, listname } = props;
  const { handlePin, handleArchive, deleteNote } =
    useContext(NoteActionContext);

  const Archive = () => {
    handleArchive(id);
  };

  const Pin = () => {
    handlePin(id);
  };

  const Delete = () => {
    deleteNote(id);
  };

  return (
    <div id='note' className='col-lg-3 col-md-6 col-sm-12'>
      <h4>{title}</h4>
      <p>{note}</p>
      {listname === 'delete' ? (
        <></>
      ) : (
        <div className='icons-container'>
          <div onClick={Pin}>
            {pin ? (
              <RiPushpin2Fill className='note-icon' />
            ) : (
              <RiPushpin2Line className='note-icon' />
            )}
          </div>
          <div onClick={Delete}>
            <RiDeleteBin5Fill className='note-icon' />
          </div>
          <div onClick={Archive}>
            {archiev ? (
              <BiArchiveOut className='note-icon' />
            ) : (
              <BiArchiveIn className='note-icon' />
            )}
          </div>
          <div>
            <BiEdit className='note-icon' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
