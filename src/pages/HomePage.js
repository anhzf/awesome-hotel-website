import React from 'react';
import Header from '../components/Header';
import ImgCard from '../components/ImgCard';
import mtbromo from '../assets/mt-bromo.png';
import belitungIsland from '../assets/belitung-island.png';
import tobaLake from '../assets/toba-lake.png';
import wehIsland from '../assets/weh-island.png';

export default function HomePage() {
    return (<>
        <Header id="home" />
        <main className="p-20 space-y-20">
            <section className="flex flex-col gap-y-16">
                <h2 className="text-6xl font-medium">Get ready for <span className="text-green-500">the Beauty</span></h2>

                <img src="http://placeimg.com/800/400/nature" alt="beautiful indonesia" className="self-center h-96" />
            </section>

            <section className="h-96 flex justify-center items-center">
                <h2 className="text-6xl font-medium">Feel <span className="text-green-500">the nature</span></h2>
            </section>

            <section className="grid grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 items-end">
                    <ImgCard title="Mt. Bromo" src={mtbromo} className="h-96 w-72" />
                    <ImgCard title="Belitung Island" src={belitungIsland} className="h-72 w-96" />
                </div>
                <div className="flex flex-col space-y-8 items-start">
                    <ImgCard title="Toba Lake" src={tobaLake} className="h-72 w-96" />
                    <ImgCard title="Weh Island" src={wehIsland} className="h-96 w-72" />
                </div>
            </section>

            <section>
                lorem ipsum dolor sit amet
            </section>
        </main>
    </>)
}