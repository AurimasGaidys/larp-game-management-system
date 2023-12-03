"use client";
import { useEffect, useState } from "react";
import { InvestigationCell } from "../../../components/investigation/investigationCell";
import { onGetInvestigationsCall } from "../../../dataLayer/apiService";
import { InvestigationsDTO } from "../../../models/InvestigationsDto";

export default function Home() {
  const [investigations, setInvestigations] = useState<InvestigationsDTO[]>([]);

  useEffect(() => {
    onGetInvestigationsCall().then((data) => {
      console.log(data);
      const noteData = JSON.parse(data.data);
      console.log("Investigations", noteData.investigations);
      setInvestigations(noteData.investigations);
    });
  }, []);

  //     mp3@ss.com
  //      mp3mp3

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-5 px-5">
      <div className="flex">
        <div className="flex flex-col flex-1 py-5 pl-5 overflow-hidden justify-center">
          <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">
            Clues
          </h1>
        </div>
      </div>
      <div className="px-5 pb-5 space-y-5">
        <p>
          It's all fun and games until you realize all you investigations are
          stored here. 'Beware of the Sloth!
        </p>
      </div>
      <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {investigations.map((x) => (
          <InvestigationCell
            id={x.id}
            image={x.imageUrl}
            title={x.name}
            description={x.description}
            url={`dt/${x.dialogTreeId}`}
          />
        ))}
      </div>
      <div>
        <div
          className={"flex flex-row align-end bg-no-repeat bg-[url('/paper_bg.png')] rotate-2"}
          style={{ width: 350, height: 210, position: "relative" }}
        >
          <div className="flex flex-col p-8 justify-center">
            <div className="text-black">Category</div>
            <div className="text-black">read more</div>
          </div>
          <div className="flex">
            <div
              className={"bg-[url('/photo_frame.png')] bg-no-repeat rotate-[-2deg]"}
              style={{ width: 157, height: 204, position: "absolute", top: -1 }}
            >
              <img
                style={{ position: "absolute", top: -10, left: 10 }}
                src="/paper_clip.png"
                alt="my image"
              />
              <img
                style={{ padding: 20, paddingTop: 40 }}
                src="/ghost.jpeg"
                alt="my image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
