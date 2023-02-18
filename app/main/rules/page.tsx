'use client';

import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { firebaseAuth } from '../../../dataLayer/initFirebase';


export default function Rules({ searchParams }: any) {

    // Initialize Firebase
    const router = useRouter();
    const [email, setEmail] = useState("aurimas@ss.lt");
    const [password, setPassword] = useState("aurimas@ss.lt");

    useEffect(() => {
        (async () => {
            await setPersistence(firebaseAuth, browserLocalPersistence);
        })();
    }, [])

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 p-2">
            <div className="m-auto">
                <div>
                    <div className="mt-5 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="flex">
                            <div className="flex flex-col flex-1 py-5 pl-5 overflow-hidden justify-center">
                                <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">Game rules</h1>
                            </div>
                        </div>
                        <div className="px-5 pb-5 space-y-5">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <div className="px-5 pb-5 space-y-5">
                                <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Objectives</h2>
                                <li>Primint Vaidui apie visata</li>
                                <li>Kai nesutiks dar karta primint</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
