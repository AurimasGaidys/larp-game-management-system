export default function Login() {
  const createImage = (name: string) => {
    return (
      <img
        src="./assets/image/table_0.png"
        id="a118d89a"
        draggable="false"
        style={{
          opacity: 1,
          overflow: "visible",
          left: 0,
          top: 0,
          width: 2333.33,
          height: 412.533,
          transform: "translate(-326.667px, 0px)",
        }}
      ></img>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 bg-[url('/main/bg.jpg')]">
      <div className="m-auto">
        <div>
          <h1 className="text-6xl uppercase font-extrabold text-center">
            Dvidlis
          </h1>

          <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-[8px] left-1/2">
            <div className="flex flex-row justify-center">
              <div className="flex w-[4rem] w-[4rem]  bg-[url('/Tab6.png')] justify-center item-center">
                <div className="w-[2rem] h-[2rem] bg-[url('/bottom-menu/game_rules_icon2.png')] "></div>
              </div>
              <div className="flex w-[4rem] w-[4rem] bg-[url('/Tab6.png')] mt-4 justify-center">
                <div className="w-[2rem] h-[2rem] bg-[url('/bottom-menu/game_rules_icon2.png')] "></div>
              </div>
              <div className="w-[4rem] w-[4rem]  bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] mb-4"></div>
              </div>
              <div className="w-16 h-16 border-[2px] border-[#182130] z-50">
                <div className="h-16 bg-[#A45078]  border-t-[1px] border-[#D9D9D9] flex flex-row justify-center items-center">
                  <div className="w-[2rem] h-[2rem] bg-[url('/bottom-menu/game_rules_icon2.png')] "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-0 h-[10px] -bottom-px w-full border-[2px] border-[#182130] z-40">
        <div className="h-[10px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
