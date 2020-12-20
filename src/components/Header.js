import React from 'react';
import { mergeClass } from '../utils';
import landingPageImg from '../assets/landing-page-hero.png';

const C = {
    container: 'h-screen',

    __background: 'relative w-full h-full',
    __background__img: 'w-full h-full',
    __background__overlay: 'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800',
    __backgroundContent: 'absolute overflow-auto top-0 left-0 w-full h-full md:p-20 p-12 flex flex-col justify-end',

    title: 'text-white font-medium',
    title1: 'md:text-6xl sm:text-4xl text-3xl',
    title2: 'md:text-9xl sm:text-8xl text-6xl',
}

export default function Header(props) {
    return (<>
        <header className={C.container} {...props}>
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