import { ButtonElement } from "./elements/button";
import { ImageElement } from "./elements/image";
import { TextElement } from "./elements/text";
import { Wrapper } from "./wraper";

export const ElementFactory = ({ type, payload }: { type: number, payload: string }) => {
    switch (type) {
        case 0:
            return <Wrapper><ImageElement payload={payload} /></Wrapper>;
        case 1:
            return <Wrapper><TextElement payload={payload} /></Wrapper>;
        case 2:
            return <h1>{payload}</h1>;
        case 3:
            return <h2>{payload}</h2>;
        case 4:
            return <p>{payload}</p>;
        case 5:
            return <h1>{payload}</h1>;
        case 6:
            return <Wrapper><ButtonElement payload={payload} /></Wrapper>;

    }
    return <h2>{payload}</h2>;
}