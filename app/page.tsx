'use client'; 

import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../dataLayer/initFirebase';

export default function Home() {
  const router = useRouter();

  useEffect(() =>{
    if(firebaseAuth.currentUser){
      router.push('/main/leads');
    }
  }, [firebaseAuth.currentUser])

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      router.push('/main/leads');
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className='text-red-500'>
          Dvidlis {firebaseAuth.currentUser?.email}
        </p>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Link href="/login">
      <h2 className={""}>
            Login  <span>-&gt;</span>
          </h2>
      </Link>
      <Link href="/signup">
      <h2 className={""}>
            Sign up  <span>-&gt;</span>
          </h2>
      </Link>
    </main>
  )
}
