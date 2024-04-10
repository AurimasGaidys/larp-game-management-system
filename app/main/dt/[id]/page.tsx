"use client";

import { useEffect, useState } from "react";
import { onGetDT } from "../../../../dataLayer/apiService";
import { useRouter, useSearchParams } from "next/navigation";
import { ElementFactory } from "../../../../components/dt/element-factory";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalLoadingState } from "../../../../atoms/loadingState";
import { globalEventState } from "../../../../atoms/eventState";
import { globalUserState } from "../../../../atoms/userState";

interface PageProps {
  params: {
    id: string;
  };
}

const Loading = () => {
  return (
    <div className="relative flex justify-center items-center h-full min-h-screen w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <h2>🌀 Loading...</h2>
    </div>
  );
};

interface TreeProps {
  id: string;
  treeData: any;
}

const Tree = ({ id, treeData }: TreeProps) => {
  //     <div className="flex flex-col items-center -mt-[44px]">
  //       <div className="bg-bottom bg-no-repeat h-[79px] w-[371px] bg-[url('/dt/paper-top.png')] bg-contain z-10"></div>
  //       {/* <div className="absolute left-[50%] top-[230px] h-[704px] w-[519px] -translate-x-[50%]  bgh-center bg-no-repeat h-[389px] w-[582px] bg-[url('/dt/paper-mid.jpeg')] bg-contain"></div> */}
  //       <div className="w-[370px] bg-[url('/dt/paper-middle.png')] bg-contain p-4 z-10">
  //         <p
  //           className={`-mt-[50px] text-[#1A222F] ${handWriting.className} text-2xl p-[25px] pt-0`}
  //         >
  //           {name}
  //         </p>
  //       </div>
  //       <div className="bg-bottom bg-no-repeat h-[59px] w-[371px] bg-[url('/dt/paper-bot.png')] bg-contain z-10"></div>
  //       <div className="h-[200px]" />
  //     </div>
  //   );
  // };

  return (
    <div className="relative flex h-full min-h-screen w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
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
    </div>
  );
};

const Page = (props: PageProps) => {
  const router = useRouter();
  const params = useSearchParams()?.get("reload");
  const [treeData, setTreeData] = useState();
  const [loading, setLoading] = useRecoilState(globalLoadingState);

  const gameObject = useRecoilValue(globalEventState);
  const userObject = useRecoilValue(globalUserState);

  useEffect(() => {
    if (userObject === null) {
      router.push("/signup");
      return;
    }
  }, [userObject]);

  useEffect(() => {
    if (!props.params.id) {
      router.push("/main/dt");
    }
    setLoading(true);
    onGetDT(props.params.id).then((data) => {
      const locationData = JSON.parse(data.data);
      setTreeData(locationData);
      setLoading(false);
    });
  }, [props.params.id, params, gameObject, userObject]);

  if (!treeData || loading) {
    return <Loading />;
  }

  return <Tree id={props.params.id} treeData={treeData} />;
};

export default Page;
