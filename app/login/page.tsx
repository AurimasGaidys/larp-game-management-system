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
import { PrimaryButton } from "../../components/base/button/PrimaryButton";
import { TextInput } from "../../components/base/imput/TextInput";
import { Kalam } from "next/font/google";
import { DTButton } from "../../components/base/button/DTButton";
const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

const handWritingb = Kalam({
  weight: "700",
  subsets: ["latin"],
});

export default function Login() {
  // Initialize Firebase
  const router = useRouter();
  const [email, setEmail] = useState("mp3@ss.com");
  const [password, setPassword] = useState("mp3mp3");

  useEffect(() => {
    (async () => {
      await setPersistence(firebaseAuth, browserLocalPersistence);
    })();
  }, []);

  const login = async () => {
    const auth = await firebaseAuth.setPersistence(browserLocalPersistence);
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/main/leads");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const register = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="relative min-h-screen flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <div className="absolute top-[500px] left-[200px] bgh-center bg-no-repeat h-[249px] w-[249px] bg-[url('/kd/magnifying_glass.png')] bg-contain z-50"></div>
      <div className="absolute left-[50%] top-[0] -translate-x-[50%] bgh-center bg-no-repeat h-[163px] w-[346px] bg-[url('/profile-select/paperbg.png')] bg-contain z-10"></div>
      <div className="absolute left-[50%] -top-[10px] -translate-x-[40%] bgh-center bg-no-repeat h-[581px] w-[501px] bg-[url('/profile-select/login_bg_paper.png')] bg-contain"></div>
      <div
        className={`absolute left-[50%] top-[25px] z-40 text-[#1A222F] ${handWritingb.className} text-[20px] -translate-x-[150px]`}
      >
        Hi there, welcome!
      </div>
      <div
        className={`absolute left-[50%] top-[65px] z-40 text-[#1A222F] ${handWriting.className} text-[14px] -translate-x-[150px] w-[300px]`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
        vestibulum augue massa sed aenean.
      </div>
      <div className="m-auto mt-[200px] w-[350px] z-10">
        <div className="px-5 pb-5">
          <TextInput
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e)}
            icon={"email"}
          />
          <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
          <div className="h-[10px]"></div>
          <TextInput
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e)}
            icon={"password"}
          />
          <div className="m-[7px] -mt-[10px] border-dotted border-t-[2px] border-[#9C8376]"></div>
        </div>
        <DTButton title="Login" onClick={login} />
      </div>
    </div>
  );
}
