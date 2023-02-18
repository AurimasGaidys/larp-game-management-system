'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../../../components/base/button/PrimaryButton';
import { TextInput } from '../../../components/base/imput/TextInput';

export default function YourProfile({ searchParams }: any) {

    // Initialize Firebase
    const router = useRouter();
    const [name, setName] = useState(searchParams?.code || "");
    const [phone, setPhone] = useState(searchParams?.code || "");

    const submit = (data: any) => {
        console.log("Code is", name, phone);
        router.push('/main/profile')
    }

    return (
        <div className="flex h-screen bg-gray-100 p-2">
            <div className="m-auto">
                <div>
                    <h1 className="text-6xl uppercase font-extrabold text-center">Dvidlis</h1>

                    <p className="text-4xl font-light pt-16 text-center">New agent info</p>


                    <div className="mt-5 bg-white rounded-lg shadow">
                        <div className="flex">
                            <div className="flex-1 py-5 pl-5 overflow-hidden">
                                <h1 className="inline text-2xl font-semibold leading-none">Provide real info. Visible only to Game masters</h1>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            <TextInput
                                placeholder="Real Name"
                                type={"text"}
                                value={name}
                                onChange={(e) => setName(e)} />
                            <TextInput
                                placeholder="Real Phone"
                                type={"number"}
                                value={phone}
                                onChange={(e) => setPhone(e)} />
                        </div>

                        <hr className="m-4" />
                        <div className="flex flex-col px-5 pb-5 justify-center">
                            <img className="px-5 pb-5" src='https://photogeeksteven.files.wordpress.com/2014/06/default-user-icon-profile.png'></img>
                            <PrimaryButton
                                title='Select photo'
                                onClick={submit}
                            />
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
