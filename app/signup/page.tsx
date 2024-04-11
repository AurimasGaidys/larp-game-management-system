"use client";

import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "../../dataLayer/initFirebase";
import { TextInput } from "../../components/base/imput/TextInput";
import { Kalam } from "next/font/google";
import { BaseButton } from "../../components/base/button/BaseButton";
const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

const handWritingb = Kalam({
  weight: "700",
  subsets: ["latin"],
});

export default function Signup({ searchParams }: any) {
  // Initialize Firebase
  const router = useRouter();
  const [email, setEmail] = useState("mp3@ss.com");
  const [password, setPassword] = useState("mp3mp3");
  const [password2, setPassword2] = useState("mp3mp3");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await setPersistence(firebaseAuth, browserLocalPersistence);
    })();
  }, []);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const register = () => {
    if (loading) {
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    if (!isChecked) {
      alert("Agree with GDPR");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (searchParams?.code) {
          router.push(
            "/signup/your-profile?code=" + encodeURI(searchParams?.code)
          );
        } else {
          router.push("/signup/your-profile");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("This email exists in the system, try another one.");
        console.log(errorMessage);
      })
      .finally(() => {
        setLoading(false);
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
        You will use this information to log in
      </div>
      <div className="m-auto mt-[150px] w-[350px] z-10">
        <div className="px-5 pb-5">
          <TextInput
            disabled={loading}
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e)}
            icon={"email"}
          />
          <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
          <div className="h-[10px]"></div>
          <TextInput
            disabled={loading}
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e)}
            icon={"password"}
          />
          <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
          <div className="h-[10px]"></div>
          <TextInput
            disabled={loading}
            placeholder="Repeat Password"
            type={"password"}
            value={password2}
            onChange={(e) => setPassword2(e)}
            icon={"password"}
          />
          <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
          <div className="h-[10px]"></div>
          {/* {isChecked ? null : <p>Agree with GDPR</p>} */}
          <div className="flex flex-row p-4">
            <input
              disabled={loading}
              checked={isChecked}
              onChange={handleOnChange}
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900">
              I agree with{" "}
              <a href="http://google.com" className="underline">
                GDPR rules
              </a>
            </label>
          </div>
        </div>
        <BaseButton
          title={loading ? "Loading.." : "Getting started"}
          onClick={register}
        />
      </div>
    </div>
  );
}
