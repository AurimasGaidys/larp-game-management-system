import { Kalam } from "next/font/google";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export const StickyNote = () => {
  return (
    <div className="flex flex-col bg-no-repeat h-[220px] w-[234px] bg-[url('/kd/items_header)paper.png')] bg-contain flex items-center justify-center pt-[30px]">
      <div className="z-40 bg-no-repeat h-[26px] w-[234px] bg-[url('/kd/items_highlight.png')] bg-contain flex items-center justify-center mb-[30px]"></div>
      <p
        className={`w-[170px] h-[170px] text-[#1A222F] ${handWriting.className}`}
      >
        Items you have collected. They can help to solve the case.
      </p>
    </div>
  );
};
