import React, { useState } from 'react';
import { Menu, X } from 'heroicons-react';

const C = {
    container: 'absolute z-50 w-full py-6 px-10 flex justify-end',
    menu: 'w-10 h-10 text-white',
    closeMenuBtn: 'absolute top-0 right-0 m-4',
    menuButton__container: 'relative',

    __menuReveal: 'absolute top-0 right-0 overflow-y-auto w-96 h-96 p-20 bg-gray-900 shadow-2xl flex flex-col',
    __menuItemList: 'overflow-y-auto max-w-full max-h-full text-right text-2xl text-white font-medium leading-loose '
}

function MenuReveal(props) {
    return (
        <div className={C.__menuReveal}>
            <ul className={C.__menuItemList}>
                <button onClick={props.toggleFn} className={C.closeMenuBtn}>
                    <X className={C.menu} />
                </button>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Gallery</a></li>
                <li><a href="#home">Most Popular</a></li>
                <li><a href="#home">Blogs & News</a></li>
            </ul>
        </div>
    )
}

export default function Navigation() {
    const [menuReveal, setMenuReveal] = useState(false);
    const toggleMenu = () => setMenuReveal(!menuReveal);

    return (
        <nav className={C.container}>
            <div className={C.menuButton__container}>
                {menuReveal && <MenuReveal toggleFn={toggleMenu} />}
                <button onClick={toggleMenu}>
                    <Menu className={C.menu} />
                </button>
            </div>
        </nav>
    )
}