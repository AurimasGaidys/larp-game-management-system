"use client";
import { Kalam } from "next/font/google";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { globalUserState } from "../../../atoms/userState";
import { useRouter } from "next/navigation";
import { BaseButton } from "../../../components/base/button/BaseButton";
import { iconUrl } from "../../../atoms/signup";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const userObject = useRecoilValue(globalUserState);
  const router = useRouter();

  const leads = [
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F868217386.jpg?alt=media&token=ca94ba31-3aef-4271-9819-66a6b82a1f4e",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F24728752322.jpg?alt=media&token=30c645bc-25c6-49d5-8bc6-344b9e53ea4d",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F65164650651.jpg?alt=media&token=5b44ccee-d20c-414d-9340-33b74848d8c7",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F53066714135.jpg?alt=media&token=db45a10a-7e79-40d5-9820-fe4a4d7ce498",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F20038031643.jpg?alt=media&token=26a0b52e-51ae-49b0-a393-65786ae09799",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F11143344825.jpg?alt=media&token=cb17358a-cd5f-43ab-9c48-41f520efd51a",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F38490224735.jpg?alt=media&token=9a0bffe0-bca4-4f8d-9e75-7745f59af3ff",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F68010147885.jpg?alt=media&token=5e78c1f3-9069-4cf0-bfbc-9e206fdac814",
    "https://firebasestorage.googleapis.com/v0/b/dvidlis.appspot.com/o/playerIcon%2F21155827581.jpg?alt=media&token=5c18c3d7-73dc-466c-83f8-1b1569433afa",
  ];

  const [selectedUrl, setSelectedUrl] = useRecoilState(iconUrl);

  const onSelect = (id: string) => {
    setSelectedUrl(id);
  };

  return (
    <div className="relative flex flex-col bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <div className="absolute left-[50%] top-[50px] bg-no-repeat  bg-center w-[180px] h-[50px] bg-[url('/profile-select/title.png')] bg-contain -translate-x-[180px] z-30"></div>
      <div className="absolute left-[50%] top-[0] h-[280px] w-[280px] -translate-x-[50%]  bgh-center bg-no-repeat h-[163px] w-[346px] bg-[url('/profile-select/paperbg.png')] bg-contain"></div>
      <div
        className={`absolute left-[50%] top-[115px] z-40 text-[#1A222F] ${handWriting.className} text-l -translate-x-[150px]`}
      >
        Select a profile picture
      </div>
      <div className="m-auto mt-[200px] grid grid-cols-3 max-w-[360px]">
        {leads.map((lead, i) => {
          return (
            <div className="relative" onClick={() => onSelect(lead)}>
              {lead === selectedUrl && (
                <div className="absolute -right-[7px] top-[0px] bg-no-repeat w-[36px] h-[47px] bg-[url('/kd/selected_icons.png')] bg-contain z-40"></div>
              )}
              <div
                className={
                  lead === selectedUrl
                    ? "absolute top-[8px] left-[11px] bg-no-repeat bg-center w-[106px] h-[130px] bg-cover z-20 shadow-xl shadow-red-500"
                    : "absolute top-[8px] left-[11px] bg-no-repeat bg-center w-[106px] h-[130px] bg-cover z-20 grayscale"
                }
                style={{ backgroundImage: `url(${lead})` }}
              ></div>
              <div className="relative w-[130px] h-[153px] bg-[url('/profile-select/frame.png')] bg-contain p-[20px] z-30"></div>
            </div>
          );
        })}
        <div className="h-[150px]" />
      </div>
      <div className="absolute bottom-[20px] left-[50%] -translate-x-1/2">
        <BaseButton
          title="Save"
          onClick={() => {
            if (selectedUrl === "") {
              alert("Please select a profile picture");
              return;
            }

            router.push("/signup/your-profile");
          }}
        />
      </div>
    </div>
  );
}
