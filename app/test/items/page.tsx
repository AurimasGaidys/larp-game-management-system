import { Kalam } from "next/font/google";
import { TabControlls } from "../componets/tabControls";
import { LeadList } from "./leadsList";
import { StickyNote } from "./StickyNote";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const leads = [
    "First lead data",
    "Second lead",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
  ];

  return (
    // <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
    //   <div className="fixed bottom-[0px] right-[0px] h-[200px] w-full bg-no-repeat bg-[url('/kd/items_folder.png')] bg-contain z-30 bg-bottom"></div>
    //
    // </div>
    <>
      {/* <div className="fixed top-[0px] left-[0px] h-full w-full bg-no-repeat bg-[url('/kd/topCorner.png')] bg-contain z-30"></div>
      <div className="fixed bottom-[0px] right-[0px] h-[200px] w-full bg-no-repeat bg-[url('/kd/bottomRightCorner.png')] bg-contain z-30 bg-bottom"></div> */}
      <div className="relative flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="items">
          {/* <div className="absolute top-[20px] left-[200px] bgh-center bg-no-repeat h-[249px] w-[249px] bg-[url('/kd/items_folder.png')] bg-contain z-50"></div> */}
          <div className="m-auto">
            <div>
              <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/items_folder.png')] bg-[length:329px_197px]">
                <div className="absolute right-[100px] top-[10px]">
                  <StickyNote />
                </div>
              </div>
              <LeadList leads={leads} />
            </div>
          </div>
        </TabControlls>
      </div>
    </>
  );
}
