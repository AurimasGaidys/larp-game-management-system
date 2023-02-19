'use client';

import { useRouter } from 'next/navigation';
interface Props {
    id: string;
    image: string;
    title: string;
}

export const NotepadCell = ({ id, image, title }: Props) => {
    const router = useRouter();

    return <div
        onClick={(e) => { router.push(`/main/notepad/${id}`); }}
        className="rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
        <div className="cursor-pointer">
            <figure className='flex items-center'>
                <img
                    src={image}
                    className="rounded-t p-4 h-full w-40 object-cover" />

                <figcaption className="p-4">
                    <p
                        className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                        x-text="post.title">
                        {title}
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
