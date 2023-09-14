"use client"

import { Suspense, use } from "react"
import { onGetDT, onGetLocation } from "../../../../dataLayer/apiService"
import { useRouter } from 'next/navigation';
import { ElementFactory } from "../../../../components/dt/element-factory";

interface PageProps {
    params: {
        id: string
    }
}

const Loading = () => {
    return <h2>🌀 Loading...</h2>;
}

const Tree = ({ id }: { id: string }) => {
    const router = useRouter();

    if (id === '') {
        return null;
    }

    const location = use(onGetDT(id));
    const locationData = JSON.parse(location.data);

    return <div>
        {locationData.data.map((item: {type: number, payloadJson: string}) => {
            return <ElementFactory type={item.type} payload={item.payloadJson} />
        })}
    </div>
}

const Page = (props: PageProps) => {

    return <Suspense fallback={<Loading />}>
        <Tree id={props.params.id} />
    </Suspense>
}

export default Page
