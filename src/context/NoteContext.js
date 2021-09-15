import React, { createContext, useState } from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

const tempData = [
  {
    id: 1,
    title: 'My First Note',
    note: 'This is my First Note',
    pin: true,
    archieve: false,
    bgColor: '#fff',
  },
  {
    id: 2,
    title: 'My Second Note',
    note: 'This is my Second Note',
    pin: true,
    archieve: false,
    bgColor: '#fff',
  },
  {
    id: 3,
    title: 'My Third Note',
    note: 'This is my Third Note',
    pin: false,
    archieve: false,
    bgColor: '#fff',
  },
  {
    id: 4,
    title: 'My Fourth Note',
    note: 'This is my Fourth Note',
    pin: false,
    archieve: true,
    bgColor: '#fff',
  },
  {
    id: 5,
    title: 'My Fifth Note',
    note: 'This is my Fifth Note',
    pin: true,
    archieve: true,
    bgColor: '#fff',
  },
  {
    id: 6,
    title: 'My Sixth Note',
    note: 'This is my Sixth NoteThis is my Sixth NoteThis is my Sixth NoteThis is my Sixth Note',
    pin: true,
    archieve: false,
    bgColor: '#fff',
  },
];

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState(tempData);
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

  // Delete Note Functionality
  const handleDelete = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let deletedElement = notes.splice(index, 1);
    setDeletedNotes([...deletedNotes, deletedElement[0]]);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Search note in list Functionality
  const handleSearch = (word) => {
    const newNotes = notes.filter((note) => note.title || note.note === word);
    setSearchedNotes(newNotes);
  };

  // Edit Funtcionality
  const handleEdit = (id, title, note, pin, archive, color) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      title: title,
      note: note,
      pin: pin,
      archieve: archive,
      bgColor: color,
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
          handleSearch,
          handleEdit,
        }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
