'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'
import QrReader from 'react-qr-scanner'

const Post = () => {
  const router = useRouter();
  const [result, setResult] = useState();

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

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return <div>
    <h1>Scan QR code</h1>
    <QrReader
      delay={100}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
    <p>{JSON.stringify(result)}</p>
  </div>
}

export default Post