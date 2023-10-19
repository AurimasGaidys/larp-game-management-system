"use client"
import { doc, onSnapshot } from "firebase/firestore";
import router from "next/router";
import { useEffect, useState } from "react";
import { DatabaseTables } from "../../../dataLayer/dbTable";
import { db } from "../../../dataLayer/initFirebase";
import { ItemsDTO } from "../../../models/ItemsDto";

export const ItemCell = ({ itemId, amount }: { itemId: string, amount: number }) => {

    const [item, setItem] = useState<ItemsDTO | undefined>();

    useEffect(() => {
        if (!itemId) {
            return;
        }

        const docRef = doc(db, DatabaseTables.items, itemId);

        const unsubscribe = onSnapshot(docRef, docSnap => {
            if (docSnap.exists()) {
                const result = docSnap.data() as ItemsDTO
                setItem(result);
            } else {
                console.log("No such document!");
            }
        });

        return () => unsubscribe();

    }, [itemId]);

    if (item == null) {
        return <div>🌀 Loading...</div>
    }

    return <div
        onClick={(e) => { router.push(`/main/items/${item.id}`); }}
        className="rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
        <div className="cursor-pointer">
            <figure className='flex items-center'>
                <img
                    src={item.imageUrl}
                    className="rounded-t p-4 h-full w-40 object-cover" />

                <figcaption className="p-4">
                    <p
                        className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                        x-text="post.title">
                        {item.name} ({amount})
                    </p>
                    <p
                        className="leading-5 text-gray-500 dark:text-gray-400"
                    >
                        {item.description}
                    </p>
                    <small
                        className="leading-5 text-gray-500 dark:text-gray-400"
                    >
                        read more ..
                    </small>
                </figcaption>
            </figure>
        </div>
    </div>
}