'use client';

import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { firebaseAuth } from '../../../dataLayer/initFirebase';
import { ElementFactory } from "../../../components/dt/element-factory";
import { useRecoilState } from "recoil";
import { globalEventState } from "../../../atoms/eventState";
import { globalLoadingState } from "../../../atoms/loadingState";
import { globalUserState } from "../../../atoms/userState";
import { onGetDT } from "../../../dataLayer/apiService";


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

export default function Rules({ searchParams }: any) {

    // Initialize Firebase
    const treeId = "Global-Game-Rules";
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
                            {treeData == null ? "loading..." : <Tree id={treeId} treeData={treeData} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
