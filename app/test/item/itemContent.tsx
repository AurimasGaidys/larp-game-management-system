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
    <div className="flex flex-col items-center">
      <div className="h-[25px]" />
      <div className="bg-bottom bg-no-repeat h-[79px] w-[371px] bg-[url('/kd/paper_content_top.png')] bg-contain"></div>
      <div className="w-[370px] bg-[url('/kd/paper_content_middle.png')] bg-contain p-4">
        <p className={`-mt-[50px] text-[#1A222F] ${handWriting.className} text-2xl`}>
          {name}
        </p>
      </div>
      <div className="bg-bottom bg-no-repeat h-[64px] w-[371px] bg-[url('/kd/paper_content_bottom.png')] bg-contain"></div>
      <div className="h-[200px]" />
    </div>
  );
};
