"use client";
import { Kalam } from "next/font/google";
import { useRecoilValue } from "recoil";
import { globalUserState } from "../../../atoms/userState";
import { TabControlls } from "../../../components/tabControls";
import { useRouter } from "next/navigation";

import { getAuth, signOut } from "firebase/auth";
import { GlobalGradients } from "../../../components/globalGradients";
const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const router = useRouter();

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    router.push("/login");
  };

  const userObject = useRecoilValue(globalUserState);

  const friends = [
    {
      name: "Kristina",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F34319280543.jpg?alt=media&token=71d1abf8-5d7f-415a-b81f-7dac274b5c2f",
    },
    {
      name: "Juozas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F68010147885.jpg?alt=media&token=5e78c1f3-9069-4cf0-bfbc-9e206fdac814",
    },
    {
      name: "Vygis",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F5668676547.jpg?alt=media&token=3b2fed97-efb7-435d-a07d-a4f2f529bec6",
    },
  ];

  const achivements = [
    {
      name: "Found a cat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://worldquestassets.firebaseapp.com/t_location_kitten_left.png",
    },
  ];

  return (
    <div className="relative flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <GlobalGradients location="profile" />
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <div
        className="absolute left-[50%] top-[138px] bg-no-repeat w-[150px] h-[150px] bg-contain -translate-x-1/2"
        style={{ backgroundImage: `url(${userObject?.imageUrl})` }}
      ></div>
      <div
        className={`absolute left-[50%] top-[325px] -translate-x-1/2 z-40 text-[#1A222F] ${handWriting.className} text-2xl`}
      >
        Detective {userObject?.name || "John Doe"}
      </div>
      <div className="absolute left-[50%] top-[0] h-[280px] w-[280px] -translate-x-[64%]  bgh-center bg-no-repeat h-[389px] w-[582px] bg-[url('/kd/profile/header.png')] bg-contain z-30"></div>
      <div
        onClick={logout}
        className="absolute cursor-pointer left-[50%] top-[359px] bg-no-repeat w-[138px] h-[65px] bg-[url('/kd/profile/logout.png')] bg-contain translate-x-[25px] z-50"
      ></div>
      <div className="absolute left-[50%] top-[420px] bg-no-repeat w-[180px] h-[50px] bg-[url('/kd/profile/achivement_title.png')] bg-contain -translate-x-[180px] z-50"></div>
      <TabControlls selected="profile">
        <div className="m-auto mt-[464px]">
          {achivements.map((achivement) => {
            return (
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="absolute top-[20px] left-[20px] bg-no-repeat w-[95px] h-[95px] bg-cover z-20"
                    style={{ backgroundImage: `url(${achivement.imageUrl})` }}
                  ></div>
                  <div className="relative w-[350px] h-[138px] bg-[url('/kd/profile/achivement_cell.png')] bg-contain p-[20px] z-30">
                    <div
                      className={`relative z-40 text-[#1A222F] ${handWriting.className} text-2xl pl-[110px] pt-[10px]`}
                    >
                      {achivement.name}
                    </div>
                    <div
                      className={`relative z-40 text-[#1A222F] ${handWriting.className} text-l pl-[110px]`}
                    >
                      {achivement.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className=" bg-no-repeat w-[180px] h-[50px] bg-[url('/kd/profile/friends_title.png')] bg-contain z-50 mt-[20px]"></div>
          {friends.map((lead) => {
            return (
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="absolute top-[10px] left-[20px] bg-no-repeat w-[90px] h-[120px] bg-cover z-20 bg-center"
                    style={{ backgroundImage: `url(${lead.imageUrl})` }}
                  ></div>
                  <div className="relative w-[360px] h-[141px] bg-[url('/kd/profile/friends_cell2.png')] bg-contain p-[20px] z-30">
                    <div
                      className={`relative z-40 text-[#1A222F] ${handWriting.className} text-2xl pl-[110px] pt-[30px]`}
                    >
                      {lead.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="h-[100px]" />
        </div>
      </TabControlls>
    </div>
  );
}
