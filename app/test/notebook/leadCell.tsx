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
    <div className="relative h-[205px] w-[390px] bg-no-repeat bg-[url('/kd/paper_bg.png')] bg-contain flex p-8 items-center justify-end">
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
      <div className="relative h-[190px] w-[190px] bg-no-repeat bg-[url('/ghost.jpeg')] bg-[length:105px_105px] mt-[34px] bg-top">
        <div className="relative h-[180px] w-[180px] bg-no-repeat bg-[url('/kd/photo_container_temp.png')] bg-contain -mt-[14px]" />
      </div>
    </div>
  );
};
