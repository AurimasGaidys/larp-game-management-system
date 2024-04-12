"use client";

import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { globalEventId } from "../../atoms/eventState";
import { globalUserState } from "../../atoms/userState";
import { User } from "../../models/player/user";
import { DatabaseTables } from "../dbTable";
import { db, firebaseAuth } from "../initFirebase";

export const UserContext = () => {
  const [userObject, setUserObject] = useRecoilState(globalUserState);
  const [eventId, setEventId] = useRecoilState(globalEventId);
  const [userId, setUserId] = useState("");
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserObject(null);
    }
  });

  useEffect(() => {
    if (userId === "") {
      return;
    }

    const docRef = doc(db, DatabaseTables.users, userId);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const result = docSnap.data() as User;
        setUserObject(result);
        setEventId(result.eventId);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, [userId]);

  return <div />
  return <div>UserContext: {userObject?.name}</div>;
};
