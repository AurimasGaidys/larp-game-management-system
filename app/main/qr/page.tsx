'use client';


import { useState } from "react";
import { useRouter } from 'next/navigation'

import dynamic from "next/dynamic";

export default function Page() {
  const router = useRouter();
  const [result, setResult] = useState();

  const QrReader = dynamic(() => import('react-qr-scanner'), {
    ssr: false
  }) as any;


  const handleScan = (data: any) => {
    if (data != null) {
      console.log(data);
      setResult(data);
      // Todo po to buti buti .app
      const link = data.text?.split(".app")?.[1];
      router.push(link || "/");
    }
  }

  const handleError = (err: any) => {
    console.error(err)
  }

  return <div>
    {QrReader && <QrReader
      delay={300}
      style={{
        height: "100%",
        width:  "100%"
      }}
      facingMode={"environment"}
      constraints={{
        video: { facingMode: "environment" }
      }}
      onError={handleError}
      onScan={handleScan}
    />}
    <p>{JSON.stringify(result)}</p>
  </div>
}
