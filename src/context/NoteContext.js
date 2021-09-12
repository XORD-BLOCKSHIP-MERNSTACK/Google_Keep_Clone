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
  const archieve = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archieve = true;
  };

  const unArchieve = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    notes[index].archieve = false;
  };

  // Pin Functionality
  const pinned = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      pin: !newNotes[index].pin,
    };
    setNotes(newNotes);
  };

  const unPinned = (id) => {
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
          archieve,
          unArchieve,
          pinned,
          unPinned,
          deleteNote,
        }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
