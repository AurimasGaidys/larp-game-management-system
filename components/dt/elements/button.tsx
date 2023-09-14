import { PrimaryButton } from "../../base/button/PrimaryButton";

interface TextProps {
    payload: string
}

export const ButtonElement = (p: TextProps) => {
    const cata = JSON.parse(p.payload);
    return <PrimaryButton
        title={cata.name}
        onClick={() => { }}
    />
}