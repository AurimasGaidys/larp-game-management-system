"use client";
import { useRecoilState } from 'recoil';
import { globalUserState } from '../../../atoms/userState';
import { NotepadCell } from '../../../components/notepad/notepadCell';
import { ItemCell } from './cell';

export default function Home() {

    const [userObject, setUserObject] = useRecoilState(globalUserState);

    const posts = userObject?.inventory.map(x => <ItemCell itemId={x.id} amount={x.quantity} />);
    

    return <section className="bg-gray-100 dark:bg-gray-900 py-5 px-5">
        <div className="flex">
            <div className="flex flex-col flex-1 py-5 pl-5 overflow-hidden justify-center">
                <h1 className="inline text-2xl font-semibold leading-none text-center pb-5">Inventory</h1>
            </div>
        </div>
        <div className="px-5 pb-5 space-y-5">
            <p>Tell what it is. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </div>
        <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts}
        </div>
    </section>
}