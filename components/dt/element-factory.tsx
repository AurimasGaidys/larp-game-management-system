import { useRouter } from "next/router";
import { AudioElement } from "./elements/audio";
import { ButtonElement } from "./elements/button";
import { ImageElement } from "./elements/image";
import { ProgressElement } from "./elements/progress";
import { TextElement } from "./elements/text";
import { VideoElement } from "./elements/video";
import { Wrapper } from "./wraper";

export const ElementFactory = ({ type, payload, treeId }: { type: number, payload: string, treeId: string}) => {  
    switch (type) {
        case 0:
            return <Wrapper><ImageElement payload={payload} /></Wrapper>;
        case 1:
            return <Wrapper><TextElement payload={payload} /></Wrapper>;
        case 2:
            return <Wrapper><VideoElement payload={payload} /></Wrapper>;
        case 3:
            return <Wrapper><hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /></Wrapper>;
        case 4:
            return <Wrapper><ProgressElement payload={payload} /></Wrapper>;
        case 5:
            return <Wrapper><AudioElement payload={payload} /></Wrapper>;
        case 6:
            return <Wrapper><ButtonElement payload={payload} treeId={treeId}/></Wrapper>;

    }
    return <h2>{payload}</h2>;
}