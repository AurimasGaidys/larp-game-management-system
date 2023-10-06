"use client"

import { useRouter } from "next/navigation";
import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";

interface TextProps {
    payload: string
    treeId: string;
}

export const ButtonElement = (p: TextProps) => {
    const router = useRouter();

    const cata = JSON.parse(p.payload) as ButtonPayload;
    return <DTButton
        title={cata.name}
        onClick={async () => {
            const result = await onAction(cata.actionId, p.treeId, "");
            if (result.success) {
                const url = JSON.parse(result.data).data.url;
                router.push(url+ `?reload=${new Date().getTime()}`) ;
            }
        }}
    />
}