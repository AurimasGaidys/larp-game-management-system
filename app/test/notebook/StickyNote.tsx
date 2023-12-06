import { Kalam } from "next/font/google";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export const StickyNote = () => {
  return (
    <div className="bg-no-repeat h-[220px] w-[234px] bg-contain flex items-center justify-center">
      <p
        className={`w-[200px] h-[170px] text-[#1A222F] ${handWriting.className}`}
      >
        Who said detective work can't be fun? All your clues are tucked away
        right here. But watch out, the Sloth is on the prowl!
      </p>
    </div>
  );
};
