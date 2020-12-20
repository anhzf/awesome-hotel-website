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
            <img src={photo} alt="tourist" className="md:w-48 sm:w-36 w-28 object-cover" />
            <div className="sm:p-8 p-6 flex flex-col justify-center">
                <blockquote className="md:text-2xl sm:text-xl text-lg italic">"{word}"</blockquote>
                <span className="font-medium">-{name}, {jobTitle}</span>
            </div>
        </article>
    )
}

export default function HomePage() {
    return (<>
        <Header />
        <main className="md:p-20 sm:p-10 p-6 space-y-28">
            <section className="flex flex-col sm:gap-y-16 gap-y-12">
                <h2 className="md:text-6xl sm:text-5xl text-4xl font-medium">Get ready for <span className="text-green-500">the Beauty</span></h2>
                
                <iframe
                    title="beautiful Indonesia"
                    src="https://www.youtube.com/embed/8c1cU4CI7SE?autoplay=1&mute=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="self-center w-full md:h-96 sm:h-72 h-48 lg:px-48 sm:px-20 px-4"
                />
            </section>

            <section className="md:h-80 sm:h-40 h-28 flex justify-center items-center">
                <h2 className="md:text-6xl sm:text-5xl text-4xl font-medium">Feel <span className="text-green-500">the nature</span></h2>
            </section>

            <section className="grid grid-cols-2 sm:gap-8 gap-4 overflow-auto">
                <article className="flex flex-col sm:space-y-8 space-y-4 items-end">
                    <ImgCard title="Mt. Bromo" src={mtbromo} className="md:h-96 sm:h-72 h-64 md:w-72 w-full" />
                    <ImgCard title="Belitung Island" src={belitungIsland} className="md:h-72 sm:h-52 h-64 md:w-96 sm:w-72 w-full" />
                </article>
                <article className="flex flex-col sm:space-y-8 space-y-4 items-start">
                    <ImgCard title="Toba Lake" src={tobaLake} className="md:h-72 sm:h-52 h-64 md:w-96 sm:w-72 w-full" />
                    <ImgCard title="Weh Island" src={wehIsland} className="md:h-96 sm:h-72 h-64 md:w-72 w-full" />
                </article>
            </section>

            <section className="flex flex-col">
                <h2 className="md:text-6xl sm:text-5xl text-4xl text-center font-medium">Explore the <span className="text-blue-500">most popular</span> destination</h2>

                <article className="md:px-16 px-4 py-16 grid sm:grid-cols-3 grid-cols-1 gap-x-4 sm:gap-y-0 gap-y-4">
                    <ImgCard title="Kutai Beach - Bali" src={kutaiBeach} titleClass="text-center" />
                    <ImgCard title="Tanah Lot - Bali" src={tanahLot} titleClass="text-center" />
                    <ImgCard title="Borobudur - Yogyakarta" src={borobudur} titleClass="text-center" />
                </article>
            </section>

            <section className="flex flex-col">
                <h2 className="md:text-6xl sm:text-5xl text-4xl text-center font-medium">Tourist say...</h2>

                <div className="md:px-0 sm:px-8 px-4 py-20 grid md:grid-cols-2 grid-cols-1 gap-y-8">
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                    <TouristSay photo={tourist1} name="Yoshi" jobTitle="Influencer" word="That's was awesome trip..." />
                </div>
            </section>
        </main>
    </>)
}