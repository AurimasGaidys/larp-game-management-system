'use client';

import { useRouter } from 'next/navigation';
import { InvestigationCell } from '../../../components/investigation/investigationCell';

export default function Home() {

    const router = useRouter();

    const posts = [
        {
            id: "0",
            image:
                "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
            title: "Baby cry under the bridge",
            description:
                "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
        },
        {
            id: "1",
            image:
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            title: "Strange glow on Kaukas laiptai",
            description:
                "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
        },
        {
            id: "2",
            image:
                "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
            title: "Blackhole in Vytauto parkas",
            description:
                "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
        },
        {
            id: "3",
            image:
                "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
            title: "Strange knock",
            description:
                "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
        },
        {
            id: "4",
            image:
                "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
            title: "Bright lights on Napoleono kalnas",
            description:
                "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
        }
    ];

    return <section className="bg-gray-100 dark:bg-gray-900 py-5 px-5">
        <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map(x => InvestigationCell(x))}
        </div>
    </section>

}