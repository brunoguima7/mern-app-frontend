import { Note } from "../models/note";
import formatDate from "../utilities/formatDate";

interface NoteProps {
    note: Note
}

export default function NoteCard({note}: NoteProps) {

    let dateText: string 

    if (note.updatedAt > note.createdAt) {
        dateText = "Updated at: " + formatDate(note.updatedAt)
    } else {
        dateText = "Created at: " + formatDate(note.createdAt)
    }
  
    return (
        <div className="flex flex-col border w-72 h-48 rounded-lg bg-slate-100 transition ease-in-out hover:shadow-md hover:cursor-pointer overflow-hidden">
            <div className="flex flex-col space-y-2 p-4">
                <div className="text-lg font-bold">{note.title}</div>
                <div className="text-sm overflow-hidden text-slate-500 break-words h-24">{note.text}</div>
            </div>
            <div className="bg-slate-200 h-8 w-full justify-end mt-1">
                <div className="text-xs text-center my-[0.20rem] text-slate-400 bottom-1 left-[4.3rem]">{dateText}</div>
            </div>  
        </div>
    )
}