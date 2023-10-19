"use client"

import { Suspense, use, useEffect, useState } from "react"
import { onGetLocation } from "../../../../dataLayer/apiService"
import { useRouter } from 'next/navigation';
import { LocationsDTO } from "../../../../models/locationsDto";

interface PageProps {
    params: {
        id: string
    }
}

const Loading = () => {
    return <h2>🌀 Loading...</h2>;
}

const Location = ({ id }: { id: string }) => {
    const router = useRouter();

    // const params = useSearchParams()?.get("reload");
    const [locationData, setLocationData] = useState<{treeId: string, name: string} | undefined>();

    useEffect(() => {
        const location = use(onGetLocation(id));
        setLocationData(JSON.parse(location.data));
    }, [id]);
    
    if (id === '') {
        return null;
    }

    // const location = use(onGetLocation(id));
    // const locationData = JSON.parse(location.data);
    return <div>
          <div className="flex flex-col flex-1 py-5 pl-5 overflow-hidden justify-center">
                <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">Location: {locationData?.name}</h1>
            </div>
        <button  onClick={(e) => { router.push(`/main/dt/${locationData?.treeId}`); }}>Open dialog tree </button>
    </div>
}

const Page = (props: PageProps) => {

    return <Suspense fallback={<Loading />}>
        <Location id={props.params.id} />
    </Suspense>
}

export default Page
