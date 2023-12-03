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
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="m-auto">
        <div>
          <h1 className="text-6xl uppercase font-extrabold text-center">
            Dvidlis
          </h1>

          <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-0 left-1/2">
            <div className="flex flex-row justify-center">
              <div className="w-16 h-16 bg-[url('/Tab6.png')] ">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-12 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] mb-4"></div>
              </div>
              <div className="w-16 h-16 bg-[url('/Tab6.png')] mt-4 pb-4">
                <div className="w-[3rem] h-[3rem] bg-[url('/bottom-menu/game_rules_icon.png')] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-0 w-full h-1 -bottom-px bg-gray-200 rounded-full dark:bg-[#A45078] z-50"></div>
    </div>
  );
}
