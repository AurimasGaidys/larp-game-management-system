interface ITab {
  image: string;
  selected: boolean;
}

const Tab = ({ image, selected }: ITab) => {
  if (selected) {
    return (
      <div className="w-16 h-[66px]  border-[2px] border-[#182130] z-50 m-1 ">
        <div
          className={`h-[66px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9] flex flex-row justify-center items-center`}
        >
          <div className="w-[25px] h-[30px] bg-contain bg-center bg-no-repeat bg-[url('/bottom-menu/game_rules_icon2.png')] "></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-16 h-[51px] border-[2px] border-[#182130] z-50 m-1 mt-[17px]">
        <div
          className={`h-[49px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9] flex flex-row justify-center items-center`}
        >
          <div className="w-[25px] h-[30px] bg-contain bg-center bg-no-repeat bg-[url('/bottom-menu/game_rules_icon2.png')] "></div>
        </div>
      </div>
    );
  }
};

interface Props {
  children: React.ReactNode;
}

export const TabControlls = ({ children }: Props) => {
  return (
    <>
      <div className="m-auto">
        {children}
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-[13px] left-1/2">
          <div className="flex flex-row justify-center">
            <div className="w-[4rem] w-[4rem]  bg-[url('/Tab6.png')] bg-no-repeat mt-[6px]">
              <div className="w-[4rem] h-[4rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
            </div>
            <div className="h-[52px] w-[4rem]  bg-[url('/Tab6.png')] mt-4">
              <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
            </div>
            <div className="h-[52px] w-[4rem]  bg-[url('/Tab6.png')] mt-4">
              <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
            </div>
            <Tab image={"/bottom-menu/game_rules_icon2.png"} selected={true} />
            <Tab image={"/bottom-menu/game_rules_icon2.png"} selected={false} />
            <Tab image={"/bottom-menu/game_rules_icon2.png"} selected={false} />
          </div>
        </div>
      </div>
      <div className="fixed z-0 h-[10px] -bottom-px w-full border-[2px] border-[#182130] z-40">
        <div className="h-[10px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9]"></div>
      </div>
    </>
  );
};
