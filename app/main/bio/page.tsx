'use client';

import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { PrimaryButton } from '../../../components/base/button/PrimaryButton';
import { TextInput } from '../../../components/base/imput/TextInput';
import { firebaseAuth } from '../../../dataLayer/initFirebase';
import { useRecoilState } from "recoil";
import { globalLoadingState } from "../../../atoms/loadingState";
import { globalEventState } from "../../../atoms/eventState";
import { globalUserState } from "../../../atoms/userState";
import { onGetDT } from "../../../dataLayer/apiService";
import { ElementFactory } from "../../../components/dt/element-factory";

interface TreeProps {
    id: string,
    treeData: any
}

const Tree = ({ id, treeData }: TreeProps) => {
    return <div>
        {treeData.data.map((item: { type: number, payloadJson: string }) => {
            return <ElementFactory type={item.type} payload={item.payloadJson} treeId={id} />
        })}
    </div>
}

export default function Bio({ searchParams }: any) {

    const treeId = "Global-Bio";
    // Initialize Firebase
    const router = useRouter();
    const params = useSearchParams()?.get("reload");
    const [treeData, setTreeData] = useState();
    const [loading, setLoading] = useRecoilState(globalLoadingState);
    const [gameObject, setGameObject] = useRecoilState(globalEventState);
    const [userObject, setUserObject] = useRecoilState(globalUserState);

    useEffect(() => {
        console.log("DT PAGE");

        onGetDT(treeId).then((data) => {
            const locationData = JSON.parse(data.data);
            setTreeData(locationData);
            setLoading(false);
        });


    }, [params, gameObject, userObject]);

    // if (!treeData) {
    //     return <Loading />
    // }


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
                                            <video  className="dark:shadow-xl border-gray-500 rounded-full align-middle border-8 max-w-[150px]" autoPlay muted loop>
                                                <source src={"https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F40938050158.mp4?alt=media&token=1a015511-bbe4-4733-b460-c474c1ff8a2e&quot"} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 pb-5">
                            {treeData == null ? "loading..." : <Tree id={treeId} treeData={treeData} />}
                        </div>
                    </div>
                    <div className="mt-5 p-5 bg-white dark:bg-gray-800  rounded-lg shadow">
                        <div className="px-5 pb-5 space-y-5">
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Known Locations</h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-semibold">Jonas medkirtys</h3>
                                    <div className="flex items-center">
                                        <video className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 max-w-[80px]" autoPlay muted >
                                            <source src={"https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F40938050158.mp4?alt=media&token=1a015511-bbe4-4733-b460-c474c1ff8a2e&quot"} type="video/mp4" />
                                        </video>
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
                            <h2 className="inline text-2xl font-semibold leading-none text-center pb-5">Abilities</h2>
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
