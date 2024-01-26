"use client"
import { Kalam } from "next/font/google";
import { useRecoilState } from "recoil";
import { globalUserState } from "../../../atoms/userState";
import { GlobalGradients } from "../../../components/globalGradients";
import { TabControlls } from "../../../components/tabControls";
import { List } from "./list";
import { StickyNote } from "./StickyNote";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const [userObject, setUserObject] = useRecoilState(globalUserState);

  const items = userObject?.inventory || [];

  return (
    <>
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <GlobalGradients location="items" />

      <div className="relative min-h-screen flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="items">
          <div className="m-auto">
            <div>
              <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/items_folder.png')] bg-[length:329px_197px]">
                <div className="absolute right-[100px] top-[10px]">
                  <StickyNote />
                </div>
              </div>
              {items.length == 0 ? "No itema found" : <List items={items} />}
            </div>
          </div>
        </TabControlls>
      </div>
    </>
  );
}
