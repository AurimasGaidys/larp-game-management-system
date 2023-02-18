'use client';

import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../../../components/base/button/PrimaryButton';
import { TextInput } from '../../../components/base/imput/TextInput';
import { firebaseAuth } from '../../../dataLayer/initFirebase';


export default function Bio({ searchParams }: any) {

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
                                <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">PERSONAL BIO</h1>
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex justify-center w-full">
                                        <div className="relative">
                                            <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="dark:shadow-xl border-gray-500 rounded-full align-middle border-8 max-w-[150px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Fictional name</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 p-5 bg-white dark:bg-gray-800  rounded-lg shadow ">
                        <div className="px-5 pb-5 space-y-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Objectives</h2>
                                <li>Primint Vaidui apie visata</li>
                                <li>Kai nesutiks dar karta primint</li>
                        </div>
                    </div>
                    <div className="mt-5 p-5 bg-white dark:bg-gray-800  rounded-lg shadow">
                        <div className="px-5 pb-5 space-y-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Known associates</h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-semibold">Jonas medkirtys</h3>
                                    <div className="flex items-center">
                                        <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 max-w-[80px]" />
                                        <p>Influenceris. Realybes show Zvaigzde ir begemotas nugaletojas</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Jonas medkirtys</h3>
                                    <div className="flex items-center">
                                        <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 max-w-[80px]" />
                                        <p>Influenceris. Realybes show Zvaigzde ir begemotas nugaletojas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-5 bg-white dark:bg-gray-800  rounded-lg shadow">
                        <div className="px-5 pb-5 space-y-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Observed events</h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-semibold">UFO crash landing</h3>
                                    <p>The Roswell incident centers on the recovery, in 1947, of mundane metallic and rubber debris from a military balloon that crashed near Roswell, </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Evil corp creation</h3>
                                    <p>If you believe that you have no agency in the world, how can you believe in anything [or have] any kind of social trust</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-5 bg-white dark:bg-gray-800  rounded-lg shadow">
                        <div className="px-5 pb-5 space-y-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Pasive abilities</h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-semibold">Beisbolo lazda</h3>
                                    <div className="flex items-center">
                                        <img src="https://media.takealot.com/covers_tsins/68689778/68689778-1-pdpxl.jpeg" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 max-w-[80px]" />
                                        <p>Is karto tampi daug itikimesnis Sakyciau + 5 charizmos</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Pet rock</h3>
                                    <div className="flex items-center">
                                        <img src="https://images.gamebanana.com/img/ico/sprays/5f804891da197.png" className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 max-w-[80px]" />
                                        <p>Visada turi drauga</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
