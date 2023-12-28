import { Kalam } from "next/font/google";
import { NotebookEntriesDTO } from "../../../models/notebookEntries";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

interface LeadCellProps {
  note: NotebookEntriesDTO;
}

export const NoteCell = ({ note }: LeadCellProps) => {
  return (
    <div className="relative h-[205px] w-[390px] bg-no-repeat bg-contain flex p-[15px] items-center justify-end">
      <div className="absolute h-[90px] w-[86px] bg-no-repeat bg-[url('/ghost.jpeg')] bg-cover bg-top -rotate-2 top-[26px] right-[71px]" />
      <div className="absolute h-[205px] w-[390px] top-0 rigth-0 bg-no-repeat bg-[url('/kd/paper_bg.png')] bg-contain flex items-center justify-end">
        <div
          className={`absolute left-[60px] w-[100px] h-[150px] flex flex-col items-start justify-center -rotate-6`}
        >
          <p className={`w-[100px] text-[#1A222F] ${handWriting.className}`}>
            {note.name}
          </p>
          <a
            href={`./dt/${note.dialogTreeId}`}
            className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/kd/read_more_bg.png')] ${handWriting.className}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
