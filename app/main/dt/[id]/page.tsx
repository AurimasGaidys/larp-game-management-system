"use client"

import { useEffect, useState } from "react"
import { onGetDT } from "../../../../dataLayer/apiService"
import { useRouter, useSearchParams } from 'next/navigation';
import { ElementFactory } from "../../../../components/dt/element-factory";
import { useRecoilState } from "recoil";
import { globalLoadingState } from "../../../../atoms/loadingState";

interface PageProps {
    params: {
        id: string
    }
}

const Loading = () => {
    return <h2>🌀 Loading...</h2>;
}

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

const Page = (props: PageProps) => {
    const router = useRouter();
    const params = useSearchParams()?.get("reload");
    const [treeData, setTreeData] = useState();
    const [loading, setLoading] = useRecoilState(globalLoadingState);

    useEffect(() => {
        if (!props.params.id) {
            router.push('/main/dt');
        }
        
        onGetDT(props.params.id).then((data) => {
            const locationData = JSON.parse(data.data);
            setTreeData(locationData);
            setLoading(false);
        });


    }, [props.params.id, params]);

    if (!treeData) {
        return <Loading />
    }

    return <Tree id={props.params.id} treeData={treeData} />
}

export default Page
