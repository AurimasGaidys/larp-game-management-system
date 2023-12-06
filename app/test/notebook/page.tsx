import { Kalam } from "next/font/google";
import { TabControlls } from "../componets/tabControls";
import { LeadList } from "./leadsList";
import { StickyNote } from "./StickyNote";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const leads = ["First lead data", "Second lead", "Third", "Fourth", "Fifth", "Sixth"];

  return (
    <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <TabControlls selected="notebook">
        <div className="m-auto">
          <div>
            <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/notebook.png')] bg-[length:464px_429px]">
              <div className="h-full w-full max-w-lg flex flex-col p-8">
                <div className="h-[40px]"></div>
                <div className="bg-no-repeat h-[27px] w-[174px] bg-[url('/kd/notebook_title.png')] bg-contain flex items-center justify-center"></div>
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
