"use client"

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { globalLoadingState } from "../../../atoms/loadingState";
import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";
import { usePathname } from 'next/navigation'
interface TextProps {
    payload: string
    treeId: string;
}

export const ButtonElement = (p: TextProps) => {
    const router = useRouter();
    const pathname = usePathname()
    const [loading, setLoading] = useRecoilState(globalLoadingState);

    const cata = JSON.parse(p.payload) as ButtonPayload;
    return <DTButton
        loading={loading}
        title={cata.name}
        disabled={false}
        disabledTitle={JSON.stringify(cata)}
        onClick={() => {
            setLoading(true);
            onAction(pathname || "", cata.actionId, p.treeId, "").then((result) => {
                if (result.success) {
                    const url = JSON.parse(result.data).data.url;
                    router.push(url + `?reload=${new Date().getTime()}`);
                } else {
                    alert("Request Failed" + result.error);
                }
                // Maybe
                setTimeout(() => {
                    setLoading(false);
                }, 5000);
            });
        }}
    />
}