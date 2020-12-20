import React from 'react';
import Header from '../components/Header';
import ImgCard from '../components/ImgCard';
// assets
import mtbromo from '../assets/mt-bromo.png';
import belitungIsland from '../assets/belitung-island.png';
import tobaLake from '../assets/toba-lake.png';
import wehIsland from '../assets/weh-island.png';
import kutaiBeach from '../assets/kutai-beach.png';
import tanahLot from '../assets/tanah-lot.png';
import borobudur from '../assets/borobudur.png';
import tourist1 from '../assets/tourist1.png';

function TouristSay({photo, name, jobTitle, word, ...props}) {
    return (
        <article className="flex" {...props}>
            <img src={photo} alt="tourist" className="w-48" />
            <div className="p-8 flex flex-col justify-center">
                <quote className="text-2xl italic">"{word}"</quote>
                <span className="font-medium">-{name}, {jobTitle}</span>
            </div>
        </article>
    )
}

export default function HomePage() {
    return (<>
        <Header id="home" />
        <main className="p-20 space-y-28">
            <section className="flex flex-col gap-y-16">
                <h2 className="text-6xl font-medium">Get ready for <span className="text-green-500">the Beauty</span></h2>

                <img src="http://placeimg.com/800/400/nature" alt="beautiful indonesia" className="self-center h-96" />
            </section>

            <section className="h-80 flex justify-center items-center">
                <h2 className="text-6xl font-medium">Feel <span className="text-green-500">the nature</span></h2>
            </section>

            <section className="grid grid-cols-2 gap-8">
                <article className="flex flex-col space-y-8 items-end">
                    <ImgCard title="Mt. Bromo" src={mtbromo} className="h-96 w-72" />
                    <ImgCard title="Belitung Island" src={belitungIsland} className="h-72 w-96" />
                </article>
                <article className="flex flex-col space-y-8 items-start">
                    <ImgCard title="Toba Lake" src={tobaLake} className="h-72 w-96" />
                    <ImgCard title="Weh Island" src={wehIsland} className="h-96 w-72" />
                </article>
            </section>

            <section className="flex flex-col">
                <h2 className="text-6xl text-center font-medium">Explore the <span className="text-blue-500">most popular</span> destination</h2>

                <article className="p-16 grid grid-cols-3 gap-x-8">
                    <ImgCard title="Kutai Beach - Bali" src={kutaiBeach} titleClass="text-center" />
                    <ImgCard title="Tanah Lot - Bali" src={tanahLot} titleClass="text-center" />
                    <ImgCard title="Borobudur - Yogyakarta" src={borobudur} titleClass="text-center" />
                </article>
            </section>

            <section className="flex flex-col">
                <h2 className="text-6xl text-center font-medium">Tourist say...</h2>

                <div className="py-20 grid grid-cols-2 gap-y-8">
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                </div>
            </section>
        </main>
    </>)
}