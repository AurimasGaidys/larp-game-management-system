'use client';

//declare module 'react-qr-scanner';

import { useState } from "react";
import { useRouter } from 'next/navigation'
//  import QrReader from 'react-qr-scanner'

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
    <h1>Scan QR code</h1>
    {QrReader && <QrReader
      delay={300}
      style={{
        height: 240,
        width: 320,
        borderRadius: 10
      }}
      facingMode={"environment"}
      onError={handleError}
      onScan={handleScan}
    />}
    <p>{JSON.stringify(result)}</p>
  </div>
}
