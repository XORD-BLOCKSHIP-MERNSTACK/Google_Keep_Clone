import React, { useContext, useState } from 'react';

// Styled Components
import { CirclePicker } from 'react-color';

// Custom Components
import EditForm from './EditForm';

// Icons
import {
  RiPushpin2Fill,
  RiDeleteBin5Fill,
  RiPushpin2Line,
} from 'react-icons/ri';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { BiArchiveIn, BiArchiveOut, BiEdit } from 'react-icons/bi';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const Note = (props) => {
  const { id, title, note, pin, archiev, listname, bgcolor } = props;
  const { handlePin, handleArchive, handleDelete, handleBgColor } =
    useContext(NoteActionContext);
  const [color, setColor] = useState('#fff');
  const [showPicker, setShowPicker] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const Archive = () => {
    handleArchive(id);
  };

  const Pin = () => {
    handlePin(id);
  };

  const Delete = () => {
    handleDelete(id);
  };

  const BackgroundColor = (color) => {
    handleBgColor(id, color);
  };

  return (
    <div
      style={{ background: bgcolor }}
      id='note'
      className='col-lg-3 col-md-6 col-sm-12'
    >
      <div>
        <h6 className='title'>{title}</h6>
        <p className='note'>{note}</p>
      </div>

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
            <IoColorPaletteOutline
              onClick={() => setShowPicker(!showPicker)}
              className='note-icon'
            />

            <div className={showPicker ? 'show' : 'hide'}>
              <CirclePicker
                color={color}
                onChangeComplete={(color, event) => BackgroundColor(color.hex)}
                width={220}
                height={100}
              />
            </div>
          </div>
          <div>
            <BiEdit className='note-icon' onClick={() => setModalShow(true)} />
          </div>
          <div
            style={{ display: modalShow ? 'block' : 'none' }}
            className='modal'
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <EditForm setModalShow={setModalShow} {...props} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
