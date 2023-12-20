import Link from "next/link";

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
  selected:
    | "items"
    | "rules"
    | "notebook"
    | "profile"
    | "scan"
    | "leads"
    | "none";
}

export const TabControlls = ({ children, selected }: Props) => {
  const renderBg = (selected: string) => {
    switch (selected) {
      case "items":
      case "none":
        return (
          <div className="h-[10px] bg-[#529498]  border-t-[1px] border-[#D9D9D9]"></div>
        );
      case "rules":
        return (
          <div className="h-[10px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9]"></div>
        );
      case "notebook":
        return (
          <div className="h-[10px] bg-[#D2BA59]  border-t-[1px] border-[#D9D9D9]"></div>
        );
      case "profile":
        return (
          <div className="h-[10px] bg-[#C86449]  border-t-[1px] border-[#D9D9D9]"></div>
        );
      case "scan":
        return (
          <div className="h-[10px] bg-[#44834E]  border-t-[1px] border-[#D9D9D9]"></div>
        );
      case "leads":
        return (
          <div className="h-[10px] bg-[#8DB854]  border-t-[1px] border-[#D9D9D9]"></div>
        );
    }
  };

  return (
    <>
      <div className="m-auto">
        {children}
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-[13px] left-1/2">
          <div className="flex flex-row justify-center">
            {selected == "rules" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/rules-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/rules"
                className="h-[52px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/rules.png')] mt-4"
              />
            )}
            {selected == "profile" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/profile-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/profile"
                className="h-[52px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/profile.png')] mt-4"
              />
            )}
            {selected == "leads" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/leads-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/leads"
                className="h-[52px] w-[64px]  bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/leads.png')] mt-4"
              />
            )}
            {selected == "items" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/items-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/items"
                className="h-[52px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/items.png')] mt-4"
              />
            )}
            {selected == "notebook" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/notebook-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/notebook"
                className="h-[52px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/notebook.png')] mt-4"
              />
            )}
            {selected == "scan" ? (
              <div className="h-[66px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/scan-s.png')] mt-[6px]" />
            ) : (
              <Link
                href="/test/scan"
                className="h-[52px] w-[64px] bg-center bg-no-repeat bg-contain bg-[url('/kd/tabs/scan.png')] mt-4"
              />
            )}
          </div>
        </div>
      </div>
      <div className="fixed h-[10px] -bottom-px w-full border-[2px] border-[#182130] z-40">
        {renderBg(selected)}
      </div>
    </>
  );
};
