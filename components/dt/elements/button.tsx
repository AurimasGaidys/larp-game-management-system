import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";

interface TextProps {
    payload: string
    treeId: string;
}

export const ButtonElement = (p: TextProps) => {
    const cata = JSON.parse(p.payload) as ButtonPayload;
    return <DTButton
        title={cata.name}
        onClick={() => { onAction(cata.actionId, p.treeId, "") }}
    />
}