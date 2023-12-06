import { Kalam } from "next/font/google";
import { TabControlls } from "../componets/tabControls";

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
    <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <TabControlls selected="items">
        <div className="m-auto">
          <div className="bgh-center bg-no-repeat h-[249px] w-[249px] bg-[url('/kd/magnifying_glass.png')] bg-contain z-50"></div>
          <div className="h-screen">items</div>
        </div>
      </TabControlls>
    </div>
  );
}
