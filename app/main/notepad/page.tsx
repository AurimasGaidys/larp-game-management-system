'use client';

import { useRouter } from 'next/navigation';

export default function Home() {

    const router = useRouter();

    return <div>
        <p>Event logs will be here</p>
    </div>
}