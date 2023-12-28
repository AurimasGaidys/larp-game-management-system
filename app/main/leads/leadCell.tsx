import { Kalam } from "next/font/google";
import { InvestigationsDTO } from "../../../models/InvestigationsDto";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

interface LeadCellProps {
  lead: InvestigationsDTO;
}

export const LeadCell = ({ lead }: LeadCellProps) => {
  return (
    <div className="relative h-[150px] w-[375px] bg-no-repeat bg-contain flex p-2">
      <div
        className="absolute h-[110px] w-[200px] bg-no-repeat bg-[url('/ghost.jpeg')] bg-cover flex p-2 right-12 top-6 -rotate-2"
        style={{ backgroundImage: `url(${lead.imageUrl})` }}
      />
      <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/kd/ticket_bg.png')] bg-contain flex p-2">
        <div
          className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}
        >
          <p className={`w-[100px] text-[#1A222F] ${handWriting.className}`}>
            {lead.name}
          </p>
          <a
            href={`./dt/${lead.dialogTreeId}`}
            className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/kd/read_more_bg.png')] ${handWriting.className}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
