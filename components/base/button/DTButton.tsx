import { Kalam } from "next/font/google";
import { MouseEventHandler } from "react";

interface Props {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  locked?: boolean;
  buttonDescription?: string;
  buttonImage?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

const renderDescrition = (
  image: string | undefined,
  title: string | undefined
) => {
  if (!image && !title) {
    return null;
  }

  if (image && !title) {
    return (
      <div className="flex justify-center -mb-[1px]">
        <div className="relative">
          <div className="absolute -top-[10px] left-[70px] bg-no-repeat w-[120px] h-[120px] bg-[url('/btn/image_frame.png')] bg-contain z-30"></div>
          <div
            className="absolute top-[13px] left-[80px] bg-no-repeat w-[80px] h-[80px] bg-cover z-20"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="relative w-[250px] h-[124px] bg-[url('/btn/image_bg.png')] bg-contain p-[20px] z-10">
            <div
              className={`relative z-40 text-[#1A222F] ${handWriting.className} text-l pl-[80px]`}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (image && title) {
    return (
      <div className="flex justify-center -mb-[8px]">
        <div className="relative">
          <div
            className="absolute top-[20px] left-[20px] bg-no-repeat w-[60px] h-[60px] bg-contain z-20"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="relative w-[250px] h-[100px] bg-[url('/btn/text_image_cell.png')] bg-contain p-[20px] z-30">
            <div
              className={`relative z-40 text-[#1A222F] ${handWriting.className} text-l pl-[80px]`}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center -mb-[1px]">
      <div className="relative">
        <div className="relative w-[250px] h-[83px] bg-[url('/btn/text_cell.png')] bg-contain p-[10px] z-30">
          <div
            className={`relative z-40 text-[#1A222F] ${handWriting.className} text-[18px] leading-[18px]`}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DTButton = ({
  title,
  loading,
  onClick,
  buttonDescription,
  buttonImage,
  disabled,
  locked,
}: Props) => {
  if (locked) {
    return (
      <div>
        {renderDescrition(buttonImage, buttonDescription)}
        <div className="relative">
          <div className="absolute -top-[38px] -left-[114px] bg-bottom bg-no-repeat h-[178px] w-[532px] bg-[url('/btn/btn-chain.png')] bg-contain z-10"></div>
          <button disabled type="button">
            <div className="bg-bottom bg-no-repeat h-[34px] w-[300px] bg-[url('/btn/d-btn-top.png')] bg-contain z-10"></div>
            <div className="bg-bottom bg-repeat-y h-full w-[300px] bg-[url('/btn/d-btn-mid.png')] bg-contain z-10">
              <p
                className={`text-[#A81600] text-center ${handWriting.className} text-[22px] p-[5px]`}
              >
                {title}
              </p>
            </div>
            <div className="bg-bottom bg-no-repeat h-[39px] w-[300px] bg-[url('/btn/d-btn-bot.png')] bg-contain z-10"></div>
          </button>
        </div>
      </div>
    );
  }

  if (disabled) {
    return (
      <div>
        {renderDescrition(buttonImage, buttonDescription)}
        <button disabled type="button">
          <div className="bg-bottom bg-no-repeat h-[34px] w-[300px] bg-[url('/btn/d-btn-top.png')] bg-contain z-10"></div>
          <div className="bg-bottom bg-repeat-y h-full w-[300px] bg-[url('/btn/d-btn-mid.png')] bg-contain z-10">
            <p
              className={`text-[#A81600] text-center ${handWriting.className} text-[22px] p-[5px]`}
            >
              {title}
            </p>
          </div>
          <div className="bg-bottom bg-no-repeat h-[39px] w-[300px] bg-[url('/btn/d-btn-bot.png')] bg-contain z-10"></div>
        </button>
      </div>
    );
  }

  return (
    <div>
      {renderDescrition(buttonImage, buttonDescription)}
      <button disabled={loading || disabled} onClick={onClick} type="button">
        <div className="bg-bottom bg-no-repeat h-[34px] w-[300px] bg-[url('/btn/btn-top.png')] bg-contain z-10"></div>
        <div className="bg-bottom bg-repeat-y h-full w-[300px] bg-[url('/btn/btn-mid.png')] bg-contain z-10">
          <p
            className={`text-[#A81600] text-center ${handWriting.className} text-[22px] p-[5px]`}
          >
            {title}
          </p>
        </div>
        <div className="bg-bottom bg-no-repeat h-[39px] w-[300px] bg-[url('/btn/btn-bot.png')] bg-contain z-10"></div>
      </button>
    </div>
  );
};
