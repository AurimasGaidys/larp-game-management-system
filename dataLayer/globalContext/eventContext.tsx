"use client";

import { EventDTO } from "../../models/EventDto";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DatabaseTables } from "../dbTable";
import { db } from "../initFirebase";
import { globalEventId, globalEventState } from "../../atoms/eventState";

export const EventContext = () => {
  const [gameObject, setGameObject] = useRecoilState(globalEventState);
  const [eventId, setEventId] = useRecoilState(globalEventId);

  useEffect(() => {
    if (eventId === "") {
      return;
    }

    const docRef = doc(db, DatabaseTables.event, eventId);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      console.log("Current data: ", docSnap.data());

      if (docSnap.exists()) {
        const result = docSnap.data() as EventDTO;
        setGameObject(result);
      }
    });

    return () => unsubscribe();
  }, [eventId]);

  return <div />;
  return <div>Event Context {gameObject?.name}</div>;
};
