"use client";
import { doc, onSnapshot } from "firebase/firestore";
import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";
import { DatabaseTables } from "../../../dataLayer/dbTable";
import { db } from "../../../dataLayer/initFirebase";
import { ItemsDTO } from "../../../models/ItemsDto";
import { UserItem } from "../../../models/player/Item";

const handWriting = Kalam({
  weight: "300",
  subsets: ["latin"],
});

interface LeadCellProps {
  item: UserItem;
}

export const ItemCell = ({ item }: LeadCellProps) => {
  const [itemData, SetItemData] = useState<ItemsDTO | undefined>();

  useEffect(() => {
    if (!item.id) {
      return;
    }

    const docRef = doc(db, DatabaseTables.items, item.id);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const result = docSnap.data() as ItemsDTO;
        SetItemData(result);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, [item.id]);

  if (itemData == null) {
    return <div>🌀 Loading...</div>;
  }

  return (
    <div className="relative h-[243px] w-[375px] bg-no-repeat bg-contain flex p-2">
      {/* <div className="absolute h-[110px] w-[200px] bg-no-repeat bg-[url('/ghost.jpeg')] bg-cover flex p-2 right-12 top-6 -rotate-2"/> */}
      {/* <div className="relative h-[243px] w-[211px] bg-no-repeat bg-[url('/kd/bag.png')] bg-contain flex p-2"></div> */}
      <div className="relative h-[166px] w-[376px] bg-no-repeat bg-[url('/kd/items_cell.png')] bg-contain flex p-2">
        <div className="relative -mt-[55px] h-[243px] w-[211px] bg-no-repeat bg-[url('/kd/bag.png')] bg-contain flex p-2  z-10"></div>
        <div
          className="absolute left-[27px] top-[68px] -mt-[60px] h-[140px] w-[140px] bg-no-repeat bg-contain flex"
          style={{ backgroundImage: `url(${itemData.imageUrl})` }}
        />
        <div
          className={`w-[100px] h-[150px] flex flex-col items-start justify-center`}
        >
          <p className={`w-[100px] text-[#1A222F] ${handWriting.className}`}>
            {itemData?.name}
          </p>
          <a
            href={`./items/${item.id}`}
            className={`flex items-center justify-center w-[80px] h-[36px] bg-no-repeat bg-contain text-[#A81600] text-center bg-[url('/kd/read_more_bg.png')] ${handWriting.className}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
