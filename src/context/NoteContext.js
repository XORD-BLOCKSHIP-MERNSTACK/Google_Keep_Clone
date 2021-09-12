import React, { createContext, useState } from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

// Temporary Data
const nnotes = [
  {
    id: 1,
    title: 'My First Note',
    note: 'first thing i have to do',
    pin: false,
  },
  {
    id: 2,
    title: 'My Second Note',
    note: 'Second thing i have to do',
    pin: true,
  },
  {
    id: 3,
    title: 'My Third Note',
    note: 'Third thing i have to do',
    pin: false,
  },
  {
    id: 4,
    title: 'My Fourth Note',
    note: 'Fourth thing i have to do',
    pin: true,
  },
  {
    id: 5,
    title: 'My Fifth Note',
    note: 'Fifth thing i have to do',
    pin: false,
  },
  {
    id: 6,
    title: 'My Sixth Note',
    note: 'Sixth thing i have to do',
    pin: true,
  },
];

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState(nnotes);
  const [deletedNotes, setDeletedNotes] = useState(nnotes);
  const [archievedNotes, setArchievedNotes] = useState(nnotes);

  const addNote = (obj) => {
    setNotes([...notes, obj]);
  };

  const archieveNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, deletedNotes, archievedNotes }}>
      <NoteActionContext.Provider
        value={{ setArchievedNotes, setDeletedNotes, setNotes, addNote }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
