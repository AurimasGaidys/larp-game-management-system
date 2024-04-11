"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { globalLoadingState } from "../../../atoms/loadingState";
import { onAction } from "../../../dataLayer/apiService";
import { DTButton } from "../../base/button/DTButton";
import { ButtonPayload } from "./payloads/dialogElementPayload";
import { usePathname } from "next/navigation";
interface TextProps {
  payload: string;
  treeId: string;
}

export const ButtonElement = (p: TextProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useRecoilState(globalLoadingState);

  const cata = JSON.parse(p.payload) as ButtonPayload;
  const isLocked = cata.hasCondition && !cata.passCondition;
  const conditionText = isLocked
    ? cata.conditionalText
    : cata.conditionalTrueText;

  return (
    <>
      <DTButton
        loading={loading}
        title={cata.name}
        locked={isLocked}
        buttonDescription={conditionText}
        buttonImage={cata.imageUrl}
        onClick={() => {
          setLoading(true);
          onAction(pathname || "", cata.actionId, p.treeId, "").then(
            (result) => {
              if (result.success) {
                let url = JSON.parse(result.data).data.url;
                // HAck todo fix.
                url = url.replace("Global-Game-Rules", "rules");
                url = url.replace("main/main/", "main/");
                url = url.replace("dt///leads", "leads");
                router.push(url + `?reload=${new Date().getTime()}`);
              } else {
                alert("Request Failed" + result.error);
              }
              // Maybe
              setTimeout(() => {
                setLoading(false);
              }, 5000);
            }
          );
        }}
      />
    </>
  );
};
