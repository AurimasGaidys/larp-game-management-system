import { Kalam } from "next/font/google";
import { MouseEventHandler } from "react";

const handWriting = Kalam({
  weight: "700",
  subsets: ["latin"],
});

interface Props {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  locked?: boolean;
  buttonDescription?: string;
  buttonImage?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const BaseButton = ({
  title,
  loading,
  onClick,
  disabled,
  locked
}: Props) => {
  return (
    <div>
      <button disabled={loading || disabled} onClick={onClick} type="button">
        <div className="relative bg-bottom bg-repeat-y h-[111px] w-[363px] bg-[url('/btn/btn-full.png')] bg-contain z-10">
          <p
            className={`absolute left-[50%] -translate-x-[50%] top-[25px] text-[#A81600] text-center ${handWriting.className} text-[22px] p-[5px]`}
          >
            {title}
          </p>
        </div>
      </button>
    </div>
  );
};
