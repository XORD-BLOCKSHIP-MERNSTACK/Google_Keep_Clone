import React, { createContext, useState } from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

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
      bgcolor: color,
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
      bgcolor: color,
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
