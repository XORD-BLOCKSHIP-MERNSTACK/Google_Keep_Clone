import React, { createContext, useState } from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

const tempData = [
  {
    id: 1,
    title: 'My First Note',
    note: [
      {
        id: 2,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 3,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 4,
        subnote: 'This is my First Note',
        check: false,
      },
    ],
    pin: true,
    archieve: false,
    bgColor: '#fff',
  },
  {
    id: 5,
    title: 'My Second Note',
    note: [
      {
        id: 6,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 7,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 8,
        subnote: 'This is my First Note',
        check: false,
      },
    ],
    pin: true,
    archieve: false,
    bgColor: '#fff',
  },
  {
    id: 9,
    title: 'My Third Note',
    note: [
      {
        id: 10,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 11,
        subnote: 'This is my First Note',
        check: false,
      },
      {
        id: 12,
        subnote: 'This is my First Note',
        check: false,
      },
    ],
    pin: false,
    archieve: false,
    bgColor: '#fff',
  },
];

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);

  // Add Note Functionality
  const addNote = (obj) => {
    setNotes([...notes, obj]);
  };

  // Archieve Functionality
  const handleArchive = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      archieve: !newNotes[index].archieve,
    };
    setNotes(newNotes);
  };

  // Pin Functionality
  const handlePin = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      pin: !newNotes[index].pin,
    };
    setNotes(newNotes);
  };

  // Background Color Functionality
  const handleBgColor = (id, color) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      bgColor: color,
    };
    setNotes(newNotes);
  };

  // CheckList Functionality
  const handleCheckList = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      checklist: !newNotes[index].checklist,
    };
    setNotes(newNotes);
  };

  // Delete Note Functionality
  const handleDelete = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let deletedElement = notes.splice(index, 1);
    setDeletedNotes([...deletedNotes, deletedElement[0]]);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Funtcionality
  const handleEdit = (id, title, note, pin, archive, color, addChecklist) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      title: title,
      note: note,
      pin: pin,
      archieve: archive,
      bgColor: color,
      checklist: addChecklist,
    };
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, deletedNotes, searchedNotes }}>
      <NoteActionContext.Provider
        value={{
          addNote,
          handleArchive,
          handlePin,
          handleDelete,
          handleBgColor,
          handleEdit,
          handleCheckList,
          setSearchedNotes,
        }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
