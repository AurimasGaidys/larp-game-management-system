"use client";

import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "../../../dataLayer/initFirebase";
import { Kalam } from "next/font/google";
import { BaseButton } from "../../../components/base/button/BaseButton";
import { BorderlessTextInput } from "../../../components/base/imput/BorderlessTextInput";
import { useRecoilValue } from "recoil";
import { iconUrl } from "../../../atoms/signup";
import { onUpdateBioCall } from "../../../dataLayer/apiService";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

const handWritingb = Kalam({
  weight: "700",
  subsets: ["latin"],
});

export default function Signup({ searchParams }: any) {
  const router = useRouter();
  const [name, setName] = useState("mp3@ss.com");
  const selectedUrl = useRecoilValue(iconUrl);

  useEffect(() => {
    (async () => {
      await setPersistence(firebaseAuth, browserLocalPersistence);
    })();
  }, []);

  const submit = async (data: any) => {
    if (name === "") {
      alert("Please enter name");
      return;
    }

    if (selectedUrl === "") {
      alert("Please enter icon");
      return;
    }

    onUpdateBioCall({ name, imageUrl: selectedUrl })
      .then(() => {
        router.push("/main/leads");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="relative min-h-screen flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <div className="absolute left-[50%] -top-[30px] -translate-x-[50%] bgh-center bg-no-repeat h-[163px] w-[346px] bg-[url('/profile-select/paperbg.png')] bg-contain z-10"></div>
      <div className="absolute left-[50%] -top-[10px] -translate-x-[40%] bgh-center bg-no-repeat h-[581px] w-[501px] bg-[url('/profile-select/login_bg_paper.png')] bg-contain"></div>
      <div className="absolute left-[50%] top-[10px] bg-no-repeat  bg-center w-[180px] h-[50px] bg-[url('/profile-select/title.png')] bg-contain -translate-x-[180px] z-30"></div>
      <div
        className={`absolute left-[50%] top-[65px] z-40 text-[#1A222F] ${handWriting.className} text-[14px] -translate-x-[150px] w-[300px]`}
      >
        Choose nickname
      </div>
      <div className="m-auto mt-[150px] w-[360px] z-10">
        <div className="bg-[url('/kd/profile_card.png')] bgh-center bg-no-repeat bg-contain h-[208px] w-[360px] ">
          <div className="px-5 pb-5">
            <div
              className="relative"
              onClick={() => {
                router.push("/signup/profile-select");
              }}
            >
              {selectedUrl == "" ? (
                <div className="absolute right-[96px] -top-[15px] bg-no-repeat w-[36px] h-[47px] bg-[url('/kd/edit_icons.png')] bg-contain z-40"></div>
              ) : (
                <div className="absolute right-[96px] -top-[15px] bg-no-repeat w-[36px] h-[47px] bg-[url('/profile-select/selected.png')] bg-contain z-40"></div>
              )}
              <div
                className="absolute -translate-x-[45px] -top-[3px] left-[50%] bg-no-repeat bg-center w-[85px] h-[124px] bg-cover z-20"
                style={{ backgroundImage: `url(${selectedUrl})` }}
              ></div>
              <div className="absolute -translate-x-[66px] -top-[13px] left-[50%] w-[130px] h-[153px] bg-[url('/profile-select/frame.png')] bg-contain z-30"></div>
            </div>
            <div className="h-[132px]"></div>
            <BorderlessTextInput
              placeholder="Email"
              type={"email"}
              value={name}
              onChange={(e) => setName(e)}
            />
            <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
            <div className="h-[10px]"></div>
          </div>
        </div>
        <div className="h-[10px]"></div>
        <BaseButton title="Getting started" onClick={submit} />
      </div>
    </div>
  );
}
