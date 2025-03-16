import NoteList from "./NoteList";
import styles from "./NotesList.module.css";
export default function NotesList({ Notes, setNotes, setEditedNote }) {
  return (
    <div className={styles.List}>
      {Notes.map((note, index) => (
        <NoteList
          key={index}
          note={note}
          count={index + 1}
          Notes={Notes}
          setNotes={setNotes}
          setEditedNote={setEditedNote}
        />
      ))}
    </div>
  );
}
