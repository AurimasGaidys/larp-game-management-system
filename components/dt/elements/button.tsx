import { DTButton } from "../../base/button/DTButton";

interface TextProps {
    payload: string
}

export const ButtonElement = (p: TextProps) => {
    const cata = JSON.parse(p.payload);
    return <DTButton
        title={cata.name}
        onClick={() => { }}
    />
}