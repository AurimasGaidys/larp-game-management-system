import { Kalam } from "next/font/google";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

interface LeadCellProps {
  lead: string;
}

export const LeadCell = ({ lead }: LeadCellProps) => {
  return (
    <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/kd/ticket_bg.png')] bg-contain flex p-2">
      <div
        className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}
      >
        <p className={`w-[100px] text-[#1A222F] ${handWriting.className}`}>
          {lead}
        </p>
        <p
          className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/kd/read_more_bg.png')] ${handWriting.className}`}
        >
          Read more
        </p>
      </div>
      <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/kd/ticket_thumb.png')] bg-contain">
        <img
          style={{ padding: 20, paddingTop: 40 }}
          src="/ghost.jpeg"
          alt="my image"
        />
      </div>
    </div>
  );
};
