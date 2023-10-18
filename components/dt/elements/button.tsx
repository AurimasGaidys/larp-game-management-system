"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { globalLoadingState } from "../../../atoms/loadingState";
import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";

interface TextProps {
    payload: string
    treeId: string;
}

export const ButtonElement = (p: TextProps) => {
    const router = useRouter();
    const [loading, setLoading] = useRecoilState(globalLoadingState);

    const cata = JSON.parse(p.payload) as ButtonPayload;
    return <DTButton
        loading={loading}
        title={cata.name}
        onClick={() => {
            setLoading(true);
            console.log(loading)
            onAction(cata.actionId, p.treeId, "").then((result) => {
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