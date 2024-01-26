"use client";

import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";
import { TabControlls } from "../../../components/tabControls";
import { ItemHeader } from "./itemHeader";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { firebaseAuth } from "../../../dataLayer/initFirebase";
import { useRecoilState } from "recoil";
import { globalEventState } from "../../../atoms/eventState";
import { globalLoadingState } from "../../../atoms/loadingState";
import { globalUserState } from "../../../atoms/userState";
import { onGetDT } from "../../../dataLayer/apiService";
import { ElementFactory } from "../../../components/dt/element-factory";
import { GlobalGradients } from "../../../components/globalGradients";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});
interface PageProps {
  params: {
    id: string;
  };
}

interface TreeProps {
  id: string;
  treeData: any;
}

const Tree = ({ id, treeData }: TreeProps) => {
  return (
    <div className="m-auto">
      <div className="bg-bottom bg-no-repeat h-[79px] w-[371px] bg-[url('/dt/paper-top.png')] bg-contain z-10"></div>
      <div className="w-[370px] bg-[url('/dt/paper-middle.png')] bg-contain p-4 z-10">
        {treeData.data.map((item: { type: number; payloadJson: string }) => {
          return (
            <ElementFactory
              type={item.type}
              payload={item.payloadJson}
              treeId={id}
            />
          );
        })}
      </div>
      <div className="bg-bottom bg-no-repeat h-[59px] w-[371px] bg-[url('/dt/paper-bot.png')] bg-contain z-10"></div>
    </div>
  );
};

const Post = (props: PageProps) => {
  // Initialize Firebase
  const treeId = "Global-Game-Rules";
  // Initialize Firebase
  const router = useRouter();
  const params = useSearchParams()?.get("reload");
  const [treeData, setTreeData] = useState();
  const [loading, setLoading] = useRecoilState(globalLoadingState);
  const [gameObject, setGameObject] = useRecoilState(globalEventState);
  const [userObject, setUserObject] = useRecoilState(globalUserState);

  useEffect(() => {
    console.log("DT PAGE");

    onGetDT(treeId).then((data) => {
      const locationData = JSON.parse(data.data);
      setTreeData(locationData);
      setLoading(false);
    });
  }, [params, gameObject, userObject]);

  useEffect(() => {
    (async () => {
      await setPersistence(firebaseAuth, browserLocalPersistence);
    })();
  }, []);

  return (
    <>
      <div className="relative flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <GlobalGradients location="rules" />
        <TabControlls selected="none">
          <ItemHeader />
          {treeData == null ? (
            <div className="w-[371px] ">loading...</div>
          ) : (
            <Tree id={treeId} treeData={treeData} />
          )}
        </TabControlls>
      </div>
    </>
  );
};

export default Post;
