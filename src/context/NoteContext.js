import React, { createContext, useState, useEffect } from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

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

  // Delete Note Functionality
  const deleteNote = (id) => {
    const filteredNote = notes.filter((note) => note.id === id);
    deletedNotes.push(filteredNote);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, deletedNotes }}>
      <NoteActionContext.Provider
        value={{
          addNote,
          handleArchive,
          handlePin,
          deleteNote,
        }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
