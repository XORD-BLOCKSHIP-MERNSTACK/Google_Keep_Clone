import React, { useContext, useState } from 'react';

// Icons
import { RiPushpin2Fill, RiPushpin2Line } from 'react-icons/ri';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';

// Styled Components
import { CirclePicker } from 'react-color';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const EditForm = (props) => {
  // Destructuring props
  const { setModalShow } = props;

  // Calling Context
  const { handleEdit } = useContext(NoteActionContext);

  // Creating states
  const [title, setTitle] = useState(props.title);
  const [note, setNote] = useState(props.note);
  const [pin, setPin] = useState(props.pin);
  const [archive, setArchive] = useState(props.archiev);
  const [color, setColor] = useState(props.bgColor);
  const [showPicker, setShowPicker] = useState(false);

  // Edit Function
  const Edit = () => {
    handleEdit(props.id, title, note, pin, archive, color);
    setModalShow(false);
  };

  return (
    <div className='note-form' style={{ background: color }}>
      <input
        style={{ background: color }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        style={{ background: color }}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder='Take a note'
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

          <div>
            <IoColorPaletteOutline
              onClick={() => setShowPicker(!showPicker)}
              className='note-icon'
            />

            <div className={showPicker ? 'show' : 'hide'}>
              <CirclePicker
                color={color}
                onChangeComplete={(color, event) => setColor(color.hex)}
                width={220}
                height={100}
              />
            </div>
          </div>
        </div>

        <button className='submit' onClick={Edit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditForm;
