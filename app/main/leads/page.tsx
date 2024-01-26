"use client";
import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";
import { GlobalGradients } from "../../../components/globalGradients";
import { TabControlls } from "../../../components/tabControls";
import { onGetInvestigationsCall } from "../../../dataLayer/apiService";
import { InvestigationsDTO } from "../../../models/InvestigationsDto";
import { LeadList } from "./leadsList";
import { StickyNote } from "./StickyNote";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const [leads, setLeads] = useState<InvestigationsDTO[]>([]);

  useEffect(() => {
    onGetInvestigationsCall().then((data) => {
      console.log(data);
      const nData = JSON.parse(data.data);
      setLeads(nData.investigations);
    });
  }, []);

  return (
    <>
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <div className="fixed bottom-[0px] right-[0px] h-[170px] w-[370px] bg-no-repeat bg-[url('/kd/bottomRightCorner.png')] bg-contain z-30 bg-bottom"></div>
      <GlobalGradients location="leads" />

      <div className="relative min-h-screen flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="leads">
          <div className="absolute top-[20px] left-[200px] bgh-center bg-no-repeat h-[249px] w-[249px] bg-[url('/kd/magnifying_glass.png')] bg-contain z-50"></div>
          <div className="m-auto">
            <div>
              <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/envelope.png')] bg-[length:487px_259px]">
                <div className="h-full w-full max-w-lg flex flex-col">
                  <div className="absolute top-[80px] z-40 bg-no-repeat h-[26px] w-[234px] bg-[url('/kd/leads.png')] bg-contain flex items-center justify-center"></div>
                  <div className="h-[110px]"></div>
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
