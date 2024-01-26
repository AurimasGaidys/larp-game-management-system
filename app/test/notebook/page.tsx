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
    "First Notebook entry data",
    "Second entry",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
  ];

  return (
    <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <div
        className="fixed top-[0px] left-[0px] h-[300px] w-full z-20"
        style={{
          background:
            "linear-gradient(173deg, rgba(210, 186, 89, 0.29) 2.29%, rgba(210, 186, 89, 0.00) 57.3%)",
        }}
      ></div>
      <TabControlls selected="notebook">
        <div className="m-auto">
          <div>
            <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/notebook.png')] bg-[length:464px_429px]">
              <div className="h-full w-full max-w-lg flex flex-col p-8">
                <div className="h-[40px]"></div>
                <div className="z-40 bg-no-repeat h-[27px] w-[174px] bg-[url('/kd/notebook_title.png')] bg-contain flex items-center justify-center"></div>
                <StickyNote />
              </div>
            </div>
            <LeadList leads={leads} />
          </div>
        </div>
      </TabControlls>
    </div>
  );
}
