import styles from "./Form.module.css";
import { useState } from "react";
export default function Form({ Notes, setNotes, editedNote, setEditedNote }) {
  // const [Note, setNote] = useState("");
  const [Note, setNote] = useState(editedNote || { content: "", done: false });

  const addOrEditNote = (e) => {
    e.preventDefault();
    if (Note.content.trim() !== "") {
      if (editedNote) {
        const UpdatedNotes = Notes.map((note) =>
          note.content === editedNote.content
            ? { ...note, content: Note.content }
            : note
        );
        setNotes(UpdatedNotes);
        setEditedNote(null);
      } else {
        setNotes([...Notes, Note]);
      }
      setNote({ content: "", done: false });
    }
  };
  return (
    <form className={styles.Noteform} onSubmit={addOrEditNote}>
      <div className={styles.inputcontainer}>
        <textarea
          className={styles.inputt}
          onChange={(e) => setNote({ content: e.target.value, done: false })}
          value={Note.content}
          type="text"
          placeholder="Write your note here"
          rows="4"
        />
        <button className={styles.buttonn} type="submit">
          {editedNote ? "Save changes" : "Add"}
        </button>
      </div>
    </form>
  );
}
