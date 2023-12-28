"use client";
import { Kalam } from "next/font/google";
import { useEffect, useState } from "react";
import { TabControlls } from "../../../components/tabControls";
import { onGetNotesCall } from "../../../dataLayer/apiService";
import { NotebookEntriesDTO } from "../../../models/notebookEntries";
import { CatList } from "./catList";
import { NotesList } from "./notesList";
import { StickyNote } from "./StickyNote";

const roboto = Kalam({
  weight: "300",
  subsets: ["latin"],
});

export default function Page() {
  const [notes, setNotes] = useState<NotebookEntriesDTO[]>([]);
  const [category, setCategory] = useState<string>("");
  const onlyUnique = (value: any, index: any, array: any) => {
    return array.indexOf(value) === index;
  };

  useEffect(() => {
    onGetNotesCall().then((data) => {
      console.log(data);
      const noteData = JSON.parse(data.data);
      console.log("Notes", noteData.notes);
      setNotes(noteData.notes);
    });
  }, []);

  if (notes.length == 0) {
    return (
      <div className="relative min-h-screen flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
        <p>Loading...</p>
      </div>
    );
  }

  const categories = notes?.map((x) => x.category).filter(onlyUnique);

  return (
    <div className="relative min-h-screen flex bg-gray-100 dark:bg-gray-900 bg-[url('/kd/bg.jpg')] bg-repeat">
      <div className="fixed top-[0px] left-[0px] h-[66px] w-[272px] bg-no-repeat bg-[url('/kd/top_shadow.png')] bg-contain z-20"></div>
      <div
        className="fixed top-[0px] left-[0px] h-[300px] w-full z-20"
        style={{
          background:
            "linear-gradient(173deg, rgba(210, 186, 89, 0.29) 2.29%, rgba(210, 186, 89, 0.00) 57.3%)",
        }}
      ></div>
      <TabControlls selected="notebook">
        <div className="m-auto">
          <div>
            <div className="absolute top-0 left-0 bg-right-top bg-no-repeat h-full w-full bg-[url('/kd/notebook.png')] bg-[length:464px_429px]">
              <div className="h-full w-full max-w-lg flex flex-col p-8">
                <div className="h-[40px]"></div>
                <div className="z-30 bg-no-repeat h-[27px] w-[174px] bg-[url('/kd/notebook_title.png')] bg-contain flex items-center justify-center"></div>
                <StickyNote />
              </div>
            </div>
            {category == "" ? (
              <CatList
                leads={categories}
                onClick={(x) => {
                  setCategory(x);
                }}
              />
            ) : (
              <NotesList notes={notes?.filter((x) => x.category == category)} />
            )}
          </div>
        </div>
      </TabControlls>
    </div>
  );
}
