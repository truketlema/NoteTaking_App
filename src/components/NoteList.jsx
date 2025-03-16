import { useState } from "react";
import styles from "./NoteList.module.css";
export default function NoteList({
  note,
  count,
  Notes,
  setNotes,
  setEditedNote,
}) {
  const [showfull, setShowfull] = useState(false);
  const handleClick = () => {
    setShowfull(!showfull);
  };
  function handleDelete(noteToDelete, e) {
    e.stopPropagation();
    setNotes(Notes.filter((note) => note.content !== noteToDelete));
  }
  const handleEdit = (e) => {
    e.stopPropagation();
    setEditedNote(note);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <h3>Note {count}</h3>
      <p>
        {showfull ? note.content : `${note.content.substring(0, 200)}...`}
        <span>
          <button
            onClick={(e) => handleDelete(note.content, e)}
            className={styles.deleteButton}
          >
            ❌
          </button>
          <button onClick={handleEdit} className={styles.editButton}>
            ✏️
          </button>
        </span>
      </p>
    </div>
  );
}
