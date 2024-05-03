import { useEffect, useState } from "react"
import { Note } from "./models/note"
import NoteCard from "./components/note"

function App() {

  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    async function loadNotes() {
      try {
        const res = await fetch("/api/notes", {method: "GET"})
        const loadedNotes = await res.json()
        setNotes(loadedNotes)
      } catch (error) {
        console.error(error)
        alert(error)
      }
    }
    loadNotes()
  }, [])

  return (
    <>
      <div className="flex flex-wrap gap-16 m-20">
        {notes.map(note => (
          <NoteCard note={note} key={note._id} />
        ))}
    </div>
    </>
  )
}

export default App
