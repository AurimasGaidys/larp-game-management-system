"use client";
import { doc, onSnapshot } from "firebase/firestore";
import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";
import { TabControlls } from "../../../../components/tabControls";
import { DatabaseTables } from "../../../../dataLayer/dbTable";
import { db } from "../../../../dataLayer/initFirebase";
import { ItemsDTO } from "../../../../models/ItemsDto";
import { ItemContent } from "./itemContent";
import { ItemHeader } from "./itemHeader";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});
interface PageProps {
  params: {
    id: string;
  };
}

const Post = (props: PageProps) => {
  const [itemData, SetItemData] = useState<ItemsDTO | undefined>();

  useEffect(() => {
    if (!props.params.id) {
      return;
    }

    const docRef = doc(db, DatabaseTables.items, props.params.id);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const result = docSnap.data() as ItemsDTO;
        SetItemData(result);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, [props.params.id]);

  if (itemData == null) {
    return (
      <div className="relative min-h-screen flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="none">
          <div className="m-auto">
            <ItemHeader name={"loading"} imageUrl={""} />
            <ItemContent name={""} />
          </div>
        </TabControlls>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex h-full w-full bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <TabControlls selected="none">
          <div className="m-auto">
            <ItemHeader name={itemData.name} imageUrl={itemData.imageUrl} />
            <ItemContent name={itemData.description} />
          </div>
        </TabControlls>
      </div>
    </>
  );
};

export default Post;
