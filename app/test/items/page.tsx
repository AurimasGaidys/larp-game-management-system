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
    <>
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <div
        className="fixed top-[0px] left-[0px] h-[300px] w-full z-20"
        style={{
          background:
            "linear-gradient(173deg, rgba(83, 150, 153, 0.32) 2.29%, rgba(83, 150, 153, 0.00) 57.3%)",
        }}
      ></div>
      <div className="relative flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="items">
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
