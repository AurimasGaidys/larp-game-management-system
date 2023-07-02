'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import { PrimaryButton } from '../../../components/base/button/PrimaryButton';
import { TextInput } from '../../../components/base/imput/TextInput';


export default function Code({ searchParams }: any) {

    // Initialize Firebase
    const router = useRouter();
    const [code, setCode] = useState(searchParams?.code || "");


    const QrReader = dynamic(() => import('react-qr-scanner'), {
        ssr: false
    }) as any;

    const submit = (data: any) => {
        console.log("Code is", code, searchParams);
        const codes = "http://localhost:3000/signup/code?code=12343"
        console.log("Code ss is", codes);
        router.push('/signup/your-profile')
    }

    const handleScan = (data: any) => {
        if (data) {
            console.log("qr data", data);
            const newCode = data.text?.split("code=")?.[1];
            console.log("qr data", newCode);
            setCode(newCode);
        }
    }

    const handleError = (err: any) => {
        console.error(err)
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 p-2">
            <div className="m-auto">
                <div>
                    <h1 className="text-6xl uppercase font-extrabold text-center">Dvidlis</h1>

                    <p className="text-4xl font-light pt-16 text-center">Identify yourself</p>


                    <div className="mt-5 bg-white dark:bg-gray-800  rounded-lg shadow">
                        <div className="flex">
                            <div className="flex-1 py-5 pl-5 overflow-hidden">
                                <h1 className="inline text-2xl font-semibold leading-none">Scan Qr</h1>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            {QrReader && <QrReader
                                delay={300}
                                style={{
                                    height: 240,
                                    width: 320,
                                    borderRadius: 10
                                }}
                                onError={handleError}
                                onScan={handleScan}
                            />}
                        </div>
                        <div className="flex">
                            <div className="flex-1 py-5 pl-5 overflow-hidden">
                                <h1 className="inline text-2xl font-semibold leading-none">Or Enter code yourself</h1>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            <TextInput
                                placeholder="code"
                                type={"text"}
                                value={code}
                                onChange={(e) => setCode(e)} />
                        </div>
                        <hr className="m-4" />
                        <div className="flex flex-row-reverse p-3">
                            <div className="flex-initial pl-3">
                                <PrimaryButton
                                    title='Create account'
                                    onClick={submit}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
