"use client";
import { Kalam } from "next/font/google";
import { useRecoilValue } from "recoil";
import { globalUserState } from "../../../atoms/userState";
import { DTButton } from "../../../components/base/button/DTButton";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const userObject = useRecoilValue(globalUserState);

  const leads = [
    "First lead data",
    "Second lead",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
  ];

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
            <div className="relative">
              {i === 0 && (
                <div className="absolute -right-[7px] top-[0px] bg-no-repeat w-[36px] h-[47px] bg-[url('/profile-select/selected.png')] bg-contain z-40"></div>
              )}
              <div className="absolute top-[13px] left-[20px] bg-no-repeat bg-center w-[85px] h-[124px] bg-[url('/256.jpeg')] bg-cover z-20"></div>
              <div className="relative w-[130px] h-[153px] bg-[url('/profile-select/frame.png')] bg-contain p-[20px] z-30"></div>
            </div>
          );
        })}
        {leads.slice(0, 3).map((lead) => {
          return (
            <div className="relative">
              <div className="absolute top-[13px] left-[20px] bg-no-repeat bg-center w-[85px] h-[124px] bg-[url('/256.jpeg')] bg-cover z-20"></div>
              <div className="relative w-[130px] h-[153px] bg-[url('/profile-select/frame.png')] bg-contain p-[20px] z-30"></div>
            </div>
          );
        })}
        <div className="h-[150px]" />
      </div>
      <div className="absolute bottom-[20px] left-[50%] -translate-x-1/2">
        <DTButton title="Save" onClick={() => {}} />
      </div>
    </div>
  );
}
