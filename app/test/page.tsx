import { Kalam } from "next/font/google";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

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

  return (
    <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/main/bg.jpg')] bg-repeat">
      <div className="absolute top-[20px] left-[200px] bgh-center bg-no-repeat h-[249px] w-[249px] bg-[url('/main/magnifying_glass.png')] bg-contain z-50"></div>
      <div className="m-auto">
        <div>
          <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/main/envelope.png')] bg-[length:487px_259px]">
            <div className="h-full w-full max-w-lg flex flex-col">
              <div className="h-[80px]"></div>
              <div className="bg-no-repeat h-[26px] w-[234px] bg-[url('/main/leads.png')] bg-contain flex items-center justify-center"></div>
              <div className="bg-no-repeat h-[220px] w-[234px] bg-[url('/main/sticky_note.png')] bg-contain flex items-center justify-center">
                <p className={`w-[170px] h-[170px] ${roboto.className}`}>
                  Tekstas tekstas tekstas Tekstas tekstas tekstas Tekstas
                  tekstas tekstas
                </p>
              </div>
            </div>
          </div>

          <div className="h-[350px]" />
          <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/main/ticket_bg.png')] bg-contain flex p-2">
            <div className={`w-[100px] h-[150px] flex flex-col items-center justify-center`}>
              <p className={`w-[100px] text-[#A81600] ${roboto.className}`}>Lead number one</p>
              <p
                className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/main/read_more_bg.png')] ${roboto.className}`}
              >
                Read more
              </p>
            </div>
            <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/main/ticket_thumb.png')] bg-contain"></div>
          </div>

      

          <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/main/ticket_bg.png')] bg-contain flex p-2">
            <div className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}>
              <p className={`w-[100px] text-[#A81600] ${roboto.className}`}>Lead number one</p>
              <p
                className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/main/read_more_bg.png')] ${roboto.className}`}
              >
                Read more
              </p>
            </div>
            <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/main/ticket_thumb.png')] bg-contain"></div>
          </div>
          <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/main/ticket_bg.png')] bg-contain flex p-2">
            <div className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}>
              <p className={`w-[100px] text-[#A81600] ${roboto.className}`}>Lead number one</p>
              <p
                className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/main/read_more_bg.png')] ${roboto.className}`}
              >
                Read more
              </p>
            </div>
            <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/main/ticket_thumb.png')] bg-contain"></div>
          </div>

          <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/main/ticket_bg.png')] bg-contain flex p-2">
            <div className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}>
              <p className={`w-[100px] text-[#A81600] ${roboto.className}`}>Lead number one</p>
              <p
                className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/main/read_more_bg.png')] ${roboto.className}`}
              >
                Read more
              </p>
            </div>
            <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/main/ticket_thumb.png')] bg-contain"></div>
          </div>

          <div className="relative h-[150px] w-[375px] bg-no-repeat bg-[url('/main/ticket_bg.png')] bg-contain flex p-2">
            <div className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}>
              <p className={`w-[100px] text-[#A81600] ${roboto.className}`}>Lead number one</p>
              <p
                className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/main/read_more_bg.png')] ${roboto.className}`}
              >
                Read more
              </p>
            </div>
            <div className="relative h-[136px] w-[236px] bg-no-repeat bg-[url('/main/ticket_thumb.png')] bg-contain"></div>
          </div>

          <div className="h-[100px]" />

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
              <Tab
                image={"/bottom-menu/game_rules_icon2.png"}
                selected={true}
              />
              <Tab
                image={"/bottom-menu/game_rules_icon2.png"}
                selected={false}
              />
              <Tab
                image={"/bottom-menu/game_rules_icon2.png"}
                selected={false}
              />
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

// export default function Login() {
//   const createImage = (name: string) => {
//     return (
//       <img
//         src="./assets/image/table_0.png"
//         id="a118d89a"
//         draggable="false"
//         style={{
//           opacity: 1,
//           overflow: "visible",
//           left: 0,
//           top: 0,
//           width: 2333.33,
//           height: 412.533,
//           transform: "translate(-326.667px, 0px)",
//         }}
//       ></img>
//     );
//   };

//   interface ITab {
//     index: number;
//     image: string;
//     selected: boolean;
//   }

//   const Tab = ({ image, selected }: ITab) => {
//     return (
//       <div
//         className={`w-16 h-[${
//           selected ? "66px" : "51px"
//         }] border-[2px] border-[#182130] z-50 m-1 ${!selected && "mt-[15px]"}"}`}
//       >
//         <div
//           className={`h-[${
//             selected ? "66px" : "51px"
//           }] bg-[#A45078]  border-t-[1px] border-[#D9D9D9] flex flex-row justify-center items-center`}
//         >
//           <div className={`w-[20px] h-[20px] bg-[url('/bottom-menu/game_rules_icon2.png')]`}></div>
//         </div>
//       </div>
//     );
//   };

//   const tabsData: ITab[] = [
//     {
//       index: 0,
//       image: "/bottom-menu/game_rules_icon2.png",
//       selected: true,
//     },
//     {
//       index: 1,
//       image: "/bottom-menu/game_rules_icon2.png",
//       selected: false,
//     },
//     {
//       index: 2,
//       image: "/bottom-menu/game_rules_icon2.png",
//       selected: false,
//     },
//     {
//       index: 3,
//       image: "/bottom-menu/game_rules_icon2.png",
//       selected: false,
//     },
//     {
//       index: 4,
//       image: "/bottom-menu/game_rules_icon2.png",
//       selected: false,
//     },
//     {
//       index: 5,
//       image: "/bottom-menu/2.png",
//       selected: false,
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 bg-[url('/main/bg.jpg')]">
//       <div className="m-auto">
//         <div>
//           <h1 className="text-6xl uppercase font-extrabold text-center">
//             Dvidlis
//           </h1>

//           <div className="fixed z-50 w-full h-[66px] max-w-lg -translate-x-1/2 rounded-full bottom-[11px] left-1/2">
//             <div className="flex flex-row justify-center">
//               {tabsData.map((x) => {
//                 return (
//                   <Tab index={x.index} image={x.image} selected={x.selected} />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed z-0 h-[10px] -bottom-px w-full border-[2px] border-[#182130] z-40">
//         <div className="h-[10px] bg-[#A45078]  border-t-[1px] border-[#D9D9D9]"></div>
//       </div>
//     </div>
//   );
// }
