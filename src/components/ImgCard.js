import React from 'react';
import { mergeClass } from '../utils';

export default function ImgCard({title, titleClass = 'text-left', src, className, ...props}) {
    return (
        <div className={mergeClass(className, 'relative shadow-lg')} {...props}>
            <img src={src} alt={title} className="w-full h-full object-cover" />

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-transparent" />

            <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-end">
                <h4 className={mergeClass('text-4xl text-white font-medium', titleClass)}>{title}</h4>
            </div>
        </div>
    )
}