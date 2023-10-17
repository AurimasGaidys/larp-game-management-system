"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";

interface TextProps {
    payload: string
    treeId: string;
}

export const ButtonElement = (p: TextProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const cata = JSON.parse(p.payload) as ButtonPayload;
    return <DTButton
        loading={loading}
        title={cata.name}
        onClick={async () => {
            setLoading(true);
            const result = await onAction(cata.actionId, p.treeId, "");
            if (result.success) {
                const url = JSON.parse(result.data).data.url;
                router.push(url + `?reload=${new Date().getTime()}`);
            }
            setLoading(false);
        }}
    />
}