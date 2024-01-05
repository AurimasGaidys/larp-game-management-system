import { Kalam } from "next/font/google";

interface LeadListProps {
  name: string;
}

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export const ItemContent = ({ name }: LeadListProps) => {
  return (
    <div className="flex flex-col items-center -mt-[44px]">
      <div className="bg-bottom bg-no-repeat h-[79px] w-[371px] bg-[url('/dt/paper-top.png')] bg-contain z-10"></div>
      {/* <div className="absolute left-[50%] top-[230px] h-[704px] w-[519px] -translate-x-[50%]  bgh-center bg-no-repeat h-[389px] w-[582px] bg-[url('/dt/paper-mid.jpeg')] bg-contain"></div> */}
      <div className="w-[370px] bg-[url('/dt/paper-middle.png')] bg-contain p-4 z-10">
        <p
          className={`-mt-[50px] text-[#1A222F] ${handWriting.className} text-2xl p-[25px] pt-0`}
        >
          {name}
        </p>
      </div>
      <div className="bg-bottom bg-no-repeat h-[59px] w-[371px] bg-[url('/dt/paper-bot.png')] bg-contain z-10"></div>
      <div className="h-[200px]" />
    </div>
  );
};
