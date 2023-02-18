'use client'; 

import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { PrimaryButton } from '../../components/base/button/PrimaryButton';
import { TextInput } from '../../components/base/imput/TextInput';
import { firebaseAuth } from '../../dataLayer/initFirebase';


export default function SignUp({searchParams}:any) {

  // Initialize Firebase
  const router = useRouter();
  const [email, setEmail] = useState("aurimas@ss.lt");
  const [password, setPassword] = useState("aurimas@ss.lt");

useEffect(()=>{
  (async () => {
    await setPersistence(firebaseAuth, browserLocalPersistence);
  })();
}, [])

  const register = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        if(searchParams?.code){
          router.push('/signup/code?code=' + encodeURI(searchParams?.code))
        } else {
          router.push('/signup/code')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

 
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 p-2">
      <div className="m-auto">
        <div>
          <h1 className="text-6xl uppercase font-extrabold text-center">Dvidlis</h1>

          <p className="text-4xl font-light pt-16 text-center">Identify yourself</p>


          <div className="mt-5 bg-white dark:bg-gray-800  rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none">New Agent credentials</h1>
              </div>
            </div>
            <div className="px-5 pb-5">
              <TextInput
                placeholder="Email"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e)} />
              <TextInput
                placeholder="Password"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e)}
              />
              <TextInput
                placeholder="Repeat Password"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e)}
              />
            </div>
            <p>GDPR shit</p>
            <hr className="m-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <PrimaryButton
                  title='Create account'
                  onClick={register}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
