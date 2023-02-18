'use client'; 

import { useRouter } from 'next/navigation';
import { firebaseAuth } from '../../dataLayer/initFirebase';
import styles from '../page.module.css';

export default function Home() {

    const router = useRouter();
    


return <div className={styles.main}>
    <h1 className={""}>Main page, {firebaseAuth.currentUser?.email}</h1>
    <button onClick={() => {firebaseAuth.signOut(); router.push('/')}}>back</button>
    </div>
}