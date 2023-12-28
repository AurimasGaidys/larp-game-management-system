import { NotebookEntriesDTO } from "../../../models/notebookEntries";
import { NoteCell } from "./noteCell";

interface LeadListProps {
  notes: NotebookEntriesDTO[];
}

export const NotesList = ({ notes }: LeadListProps) => {
  return (
    <>
      <div className="h-[350px]" />
      {notes.map((n) => {
        return <NoteCell note={n} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
