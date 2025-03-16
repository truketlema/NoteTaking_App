import React, { useState } from "react";
import NoteList from "./NoteList";
import Form from "./Form";
import NotesList from "./NotesList";
import styles from "./Note.module.css";
export default function Note() {
  const [Notes, setNotes] = useState([]);
  const [editedNote, setEditedNote] = useState(null);
  return (
    <div className={styles.NoteStyle}>
      <Form
        Notes={Notes}
        setNotes={setNotes}
        editedNote={editedNote}
        setEditedNote={setEditedNote}
      />

      <NotesList
        Notes={Notes}
        setNotes={setNotes}
        setEditedNote={setEditedNote}
      />
    </div>
  );
}
