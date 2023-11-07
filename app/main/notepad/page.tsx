'use client';
import { useEffect, useState } from 'react';
import { NotepadCell } from '../../../components/notepad/notepadCell';
import { onGetNotesCall } from '../../../dataLayer/apiService';
import { NotebookEntriesDTO } from '../../../models/notebookEntries';


const onlyUnique = (value: any, index: any, array: any) => {
    return array.indexOf(value) === index;
  }

export default function Home() {
    const [notes, setNotes] = useState<NotebookEntriesDTO[]>([]);
    const [category, setCategory] = useState<string>("");

    useEffect(() => {
        onGetNotesCall().then((data) => {
            console.log(data);
            const noteData = JSON.parse(data.data);
            console.log("Notes", noteData.notes);
            setNotes(noteData.notes);
        });
    }, []);

    return <section className="bg-gray-100 dark:bg-gray-900 py-5 px-5">
        <div className="flex">
            <div className="flex flex-col flex-1 py-5 pl-5 overflow-hidden justify-center">
                <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">Notepad records</h1>
            </div>
        </div>
        <div className="px-5 pb-5 space-y-5">
            <p>Tell what it is. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </div>
        <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category == "" && notes?.map(x => x.category).filter(onlyUnique).map(x => <button className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2" onClick={() => setCategory(x)}>{x}</button>)}
            {category != "" && notes?.filter(x => x.category == category).map(x => <NotepadCell id={x.id} image={x.imageUrl} title={x.name} />)}
        </div>
    </section>
}