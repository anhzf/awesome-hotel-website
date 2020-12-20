import React from 'react';
import { mergeClass } from '../utils';
import landingPageImg from '../assets/landing-page-hero.png';

const C = {
    container: 'h-screen',

    __background: 'relative w-full h-full',
    __background__img: 'w-full h-full',
    __background__overlay: 'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800',
    __backgroundContent: 'absolute top-0 left-0 w-full h-full p-20 flex flex-col justify-end',

    title: 'text-white font-medium',
    title1: 'text-6xl ',
    title2: 'text-9xl ',
}

export default function Header() {
    return (<>
        <header className={C.container}>
            <div className={C.__background}>
                <img src={landingPageImg} className={C.__background__img} alt="beautiful indonesia" />
                <div className={C.__background__overlay}></div>
                <div className={C.__backgroundContent}>
                    <h2 className={mergeClass(C.title, C.title1)}>Welcome to </h2>
                    <h1 className={mergeClass(C.title, C.title2)}>Indonesia!</h1>
                </div>
            </div>
        </header>
    </>)
}