"use client";

//declare module 'react-qr-scanner';

import { useState } from "react";
import { useRouter } from "next/navigation";
//  import QrReader from 'react-qr-scanner'

import dynamic from "next/dynamic";
import { TabControlls } from "../../../components/tabControls";
import { globalUserState } from "../../../atoms/userState";
import { useRecoilValue } from "recoil";

export default function Page() {
  const router = useRouter();
  const [result, setResult] = useState();
  const userObject = useRecoilValue(globalUserState);

  const QrReader = dynamic(() => import("react-qr-scanner"), {
    ssr: false,
  }) as any;

  const handleScan = (data: any) => {
    if (data != null) {
      if (userObject == null) {
        router.push("/signup");
        return;
      }
      // if no auth, send to login
      console.log(data);
      setResult(data);
      // Todo po to buti buti .app
      const link = data.text?.split(".app")?.[1];
      router.push(link || "/");
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div className="w-full h-full">
      <TabControlls selected="scan">
        <div className="absolute left-[50%] top-[50%] h-[280px] w-[280px] -translate-y-1/2 -translate-x-1/2 -translate-x-1/2 bg-no-repeat bg-[url('/kd/qr-corners.png')] bg-contain flex"></div>
        {QrReader && (
          <QrReader
            delay={300}
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
            }}
            facingMode={"environment"}
            constraints={{
              video: { facingMode: "environment" },
            }}
            onError={handleError}
            onScan={handleScan}
          />
        )}
      </TabControlls>
    </div>
  );
}
