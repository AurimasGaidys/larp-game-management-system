import { Kalam } from "next/font/google";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import style from "./markdown.module.css";
interface TextProps {
  payload: string;
}

const handWriting = Kalam({
    weight: "300",
    subsets: ["latin"],
  });

export const TextElement = (p: TextProps) => {
  const textData = JSON.parse(p.payload);
  return (
    <div
      className={`text-[#1A222F] ${handWriting.className} text-[18px] p-[5px] pt-0`}
    >
      <Markdown remarkPlugins={[remarkGfm]} className={style.reactMarkDown + ""}>
        {textData.texts[0]}
      </Markdown>
    </div>
  );
};
